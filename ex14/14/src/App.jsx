import React from "react";
import "./App.css";

// Assume src/Images/src_image.png exists and is imported
// You might need to adjust the path based on your project structure
import srcImage from "./Images/src_image.png";

// --- Part 1: Image Display ---
function ImageDisplay() {
  return (
    <div className="image-section">
      <h3>1. Image Display</h3>
      <div>
        <p>a) Image from public/Images folder:</p>
        {/* Path relative to the public folder */}
        <img
          src="/Images/public_image.png"
          alt="Public Folder Image"
          className="display-image"
        />
      </div>
      <div>
        <p>b) Image from src/Images folder:</p>
        {/* Use the imported variable */}
        <img src={srcImage} alt="Src Folder Image" className="display-image" />
      </div>
    </div>
  );
}

// --- Part 2: Login Form ---
function LoginForm() {
  return (
    <div className="form-section">
      <h3>2. Novell Services Login</h3>
      <form className="login-form">
        <div className="form-row">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <div className="form-row">
          <label htmlFor="city">City of Employment:</label>
          <input type="text" id="city" name="city" />
        </div>
        <div className="form-row">
          <label htmlFor="webserver">Web server:</label>
          <select id="webserver" name="webserver">
            <option value="">-- Choose a server --</option>
            <option value="apache">Apache</option>
            <option value="nginx">Nginx</option>
            <option value="iis">IIS</option>
          </select>
        </div>

        <fieldset className="form-fieldset">
          <legend>Please specify your role:</legend>
          <div className="radio-group">
            <input type="radio" id="admin" name="role" value="admin" />
            <label htmlFor="admin">Admin</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="engineer" name="role" value="engineer" />
            <label htmlFor="engineer">Engineer</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="manager" name="role" value="manager" />
            <label htmlFor="manager">Manager</label>
          </div>
          <div className="radio-group">
            <input type="radio" id="guest" name="role" value="guest" />
            <label htmlFor="guest">Guest</label>
          </div>
        </fieldset>

        <fieldset className="form-fieldset">
          <legend>Single Sign-on to the following:</legend>
          <div className="checkbox-group">
            <input type="checkbox" id="sso_mail" name="sso" value="mail" />
            <label htmlFor="sso_mail">Mail</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="sso_payroll"
              name="sso"
              value="payroll"
            />
            <label htmlFor="sso_payroll">Payroll</label>
          </div>
          <div className="checkbox-group">
            <input
              type="checkbox"
              id="sso_selfservice"
              name="sso"
              value="selfservice"
            />
            <label htmlFor="sso_selfservice">Self-service</label>
          </div>
        </fieldset>

        <div className="form-buttons">
          <button type="submit">Login</button>
          <button type="reset">Reset</button>
        </div>
      </form>
    </div>
  );
}

// --- Part 3: User Profile Page Components ---

// i) ProfileImage.js
function ProfileImage({ imageUrl }) {
  return <img src={imageUrl} alt="User Profile" className="profile-image" />;
}

// ii) UserInfo.js
function UserInfo({ user }) {
  return (
    <div className="user-info">
      <h4>{user.name}</h4>
      <p>Email: {user.email}</p>
      <p>Bio: {user.bio}</p>
    </div>
  );
}

// iii) UserPosts.js
function UserPosts({ posts }) {
  return (
    <div className="user-posts">
      <h5>Posts</h5>
      {posts.length > 0 ? (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>{post.content}</li>
          ))}
        </ul>
      ) : (
        <p>No posts available.</p>
      )}
    </div>
  );
}

// iv) ProfilePage.js
function ProfilePage() {
  // Sample data - replace with actual data fetching or props later
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com",
    bio: "Passionate React developer creating awesome web apps.",
    profileImageUrl: "https://via.placeholder.com/150/0000FF/FFFFFF?text=JD", // Placeholder
  };

  const userPostsData = [
    { id: 1, content: "Just learned about React Hooks!" },
    { id: 2, content: "Building my first multi-component page." },
    { id: 3, content: "CSS is fun when it works." },
  ];

  return (
    <div className="profile-page">
      <h3>3. User Profile Page</h3>
      <div className="profile-header">
        <ProfileImage imageUrl={userData.profileImageUrl} />
        <UserInfo user={userData} />
      </div>
      <UserPosts posts={userPostsData} />
    </div>
  );
}

// --- Main App Component (acting as Index.js) ---
function App() {
  return (
    <div className="App">
      <h1>Exercise 14: JSX - Part II</h1>
      <ImageDisplay />
      <hr />
      <LoginForm />
      <hr />
      <ProfilePage />
    </div>
  );
}

export default App;
