import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LightModeIcon from "@mui/icons-material/LightMode";
import EditIcon from "@mui/icons-material/Edit";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const SidebarButtonGroup = ({ children }) => (
  <div className="flex gap-4">{children}</div>
);

const SideBarButton = ({ children, onClick }) => {
  const [isClicked, setIsClicked] = useState(false);

  const buttonClasses = isClicked
    ? "bg-primary-dark shadow-inner"
    : "bg-primary-tab drop-shadow-md hover:bg-primary-hover hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]";

  return (
    <button
      className={"border rounded-full border-grays-gray p-2 " + buttonClasses}
      onClick={() => {
        setIsClicked(!isClicked);
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const SidebarTabSection = ({ children }) => (
  <div className="mt-20 flex flex-col items-start gap-4">{children}</div>
);

const SidebarTabItem = ({ children, to }) => {
  const navigate = useNavigate();

  return (
    <button
      className="pt-2 pb-1 pl-4 pr-10 bg-primary-tab border rounded-lg border-grays-gray drop-shadow-md hover:bg-primary-hover hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] focus:bg-primary-dark focus:shadow-inner"
      onClick={() => navigate(to)}
    >
      {children}
    </button>
  );
};

const SideBar = () => {
  const [isEditIcon, setIsEditIcon] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Banger Websites", to: "/websites" },
    { label: "Quotes", to: "/quotes" },
  ];

  return (
    <>
      <SidebarButtonGroup>
        <SideBarButton onClick={() => setIsEditIcon(!isEditIcon)}>
          {isEditIcon ? (
            <EditIcon fontSize="medium" />
          ) : (
            <AutoStoriesIcon fontSize="medium" />
          )}
        </SideBarButton>
        <SideBarButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? (
            <DarkModeIcon fontSize="medium" />
          ) : (
            <LightModeIcon fontSize="medium" />
          )}
        </SideBarButton>
      </SidebarButtonGroup>
      <SidebarTabSection>
        {navItems.map((item, index) => (
          <SidebarTabItem key={index} to={item.to}>
            {item.label}
          </SidebarTabItem>
        ))}
      </SidebarTabSection>
    </>
  );
};

export default SideBar;
