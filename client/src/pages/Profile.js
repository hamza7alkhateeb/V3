import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { useUpdateUserMutation, useGetUserQuery } from "../services/authApi";

function Profile() {
  // API Mutation
  const [updateUser] = useUpdateUserMutation();
  const user = useSelector((state) => state.authState.user);
  const BASE_URL = process.env.REACT_APP_API_URL;
  // State Profile Data

  const [formProfileData, setFormProfileData] = useState({
    username: user?.username || "",
    email: user?.email || "",
    phone_number: user?.phone_number || "",
    profile_picture: user?.profile_picture || "",
  });

  // State Password
  const [formPasswordData, setFormPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const handleProfileChange = (e) => {
    const { name, value, files } = e.target;
    setFormProfileData({
      ...formProfileData,
      [name]: files ? files[0] : value,
    });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setFormPasswordData({ ...formPasswordData, [name]: value });
  };

  const handleSaveInfo = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (formProfileData.username !== user.username) {
      formData.append("username", formProfileData.username);
    }
    if (formProfileData.email !== user.email) {
      formData.append("email", formProfileData.email);
    }
    if (formProfileData.phone_number !== user.phone_number) {
      formData.append("phone_number", formProfileData.phone_number);
    }
    if (
      formProfileData.profile_picture &&
      formProfileData.profile_picture !== user.profile_picture
    ) {
      formData.append("profile_picture", formProfileData.profile_picture);
    }

    if ([...formData.keys()].length === 0) {
      toast.info("No changes detected");
      return;
    }

    try {
      console.log({ id: user.id, formData });
      await updateUser({ id: user.id, formData }).unwrap();
      toast.success("Profile updated successfully!");
    } catch (error) {}
  };
  const handleChangePassword = async (e) => {
    e.preventDefault();
    const { currentPassword, newPassword, confirmPassword } = formPasswordData;

    if (!currentPassword || !newPassword || !confirmPassword) {
      toast.error("all fields required");
      return;
    }
    if (formPasswordData.newPassword !== formPasswordData.confirmPassword) {
      toast.error("New passwords do not match!");
      return;
    }

    const formData = new FormData();
    formData.append("current_password", formPasswordData.currentPassword);
    formData.append("password", formPasswordData.newPassword);
    formData.append("confirm_password", formPasswordData.confirmPassword);

    try {
      console.log({ id: user.id, formData });
      await updateUser({ id: user.id, formData }).unwrap();
      toast.success("Password updated successfully!");
    } catch (error) {
      toast.error("Error updating password!");
    }
  };
  useEffect(() => {
    if (user) {
      setFormProfileData({
        username: user.username || "",
        email: user.email || "",
        phone_number: user.phone_number || "",
        profile_picture: user.profile_picture || "",
      });
    }
  }, [user]);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-12 col-md-3 col-lg-2 sidebar p-4">
          <div className="d-flex align-items-center mb-4">
            <div className="profile-img me-3">
              <img
                src={BASE_URL + user?.profile_picture}
                alt="Profile"
                className="rounded-circle"
                style={{ width: "70px", height: "70px", objectFit: "cover" }}
              />
            </div>
            <div>
              <h6 className="mb-0">{user?.username}</h6>
              <small className="text-muted">ID: {user?.id}</small>
            </div>
          </div>
          <nav className="nav flex-column gap-1">
            <a href="2" className="nav-link active">
              Profile
            </a>
            <a href="2" className="nav-link">
              Dealership
            </a>
            <a href="2" className="nav-link">
              Listings
            </a>
            <a href="2" className="nav-link">
              Saved Searches
            </a>
            <a href="2" className="nav-link">
              Settings
            </a>
            <a href="1" className="nav-link">
              Help
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 col-lg-10 p-4">
          <h2 className="fw-bold mb-4">Profile</h2>

          {/* Personal Info */}
          <h4 className="fw-bold mb-3">Personal Information</h4>
          <form
            className="mb-5"
            style={{ maxWidth: "480px" }}
            onSubmit={handleSaveInfo}
          >
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                name="username"
                value={formProfileData.username}
                onChange={handleProfileChange}
                className="form-control form-control-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                value={formProfileData.email}
                onChange={handleProfileChange}
                className="form-control form-control-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="text"
                name="phone_number"
                value={formProfileData.phone_number}
                onChange={handleProfileChange}
                className="form-control form-control-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Profile Picture</label>
              <input
                type="file"
                name="profile_picture"
                onChange={handleProfileChange}
                className="form-control form-control-lg"
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg">
              Save Changes
            </button>
          </form>

          {/* Change Password */}
          <h4 className="fw-bold mb-3">Password</h4>
          <form style={{ maxWidth: "480px" }} onSubmit={handleChangePassword}>
            <div className="mb-3">
              <label className="form-label">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formPasswordData.currentPassword}
                onChange={handlePasswordChange}
                className="form-control form-control-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formPasswordData.newPassword}
                onChange={handlePasswordChange}
                className="form-control form-control-lg"
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formPasswordData.confirmPassword}
                onChange={handlePasswordChange}
                className="form-control form-control-lg"
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
