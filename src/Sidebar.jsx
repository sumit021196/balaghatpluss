import React from "react";

const Sidebar = () => {
  const menuItems = [
    { name: "English", action: "Change Language", icon: "🌍" },
    { name: "My Business", label: "New", icon: "🏢" },
    { name: "Leads", icon: "📩" },
    { name: "Edit Profile", icon: "✏️" },
    { name: "Customer Service", icon: "❓" },
    { name: "List your Business", label: "Free", icon: "📜" },
    { name: "Advertise", icon: "📢" },
    { name: "My Transactions", icon: "💰" },
    { name: "Help", icon: "❤️" },
    { name: "Manage Quotes", icon: "💵" },
    { name: "We are hiring", icon: "📄" },
    { name: "Settings", icon: "⚙️" },
    { name: "Privacy Policy", icon: "🛡️" },
    { name: "Investor Relations", icon: "👤" },
    { name: "What’s New", icon: "💡" },
    { name: "Others", icon: "📂" },
    { name: "Sign Out", icon: "🚪" },
  ];

  return (
    <div className="w-64 bg-white shadow-lg p-4 h-screen">
      {/* Profile Section */}
      <div className="flex items-center space-x-3 pb-4 border-b">
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div>
          <h2 className="text-lg font-semibold">sumit</h2>
          <p className="text-sm text-gray-500">Manage profile & settings</p>
        </div>
      </div>

      {/* Menu Items */}
      <ul className="mt-4 space-y-3">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-between p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
          >
            <span className="flex items-center space-x-3">
              <span>{item.icon}</span>
              <span className="text-sm font-medium">{item.name}</span>
            </span>
            {item.label && (
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  item.label === "New" ? "bg-blue-500 text-white" : "bg-red-500 text-white"
                }`}
              >
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;