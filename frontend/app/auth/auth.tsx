// authService.ts
export const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        alert("Logout successful");
        window.location.href = "/login"; // Redirect to login page after logout
      } else {
        alert("Logout failed");
      }
    } catch (error) {
      console.error("Error logging out:", error);
      alert("An error occurred while logging out");
    }
  };
  