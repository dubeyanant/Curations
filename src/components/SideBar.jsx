import React, { useState } from "react";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import LightModeIcon from "@mui/icons-material/LightMode";
import EditIcon from "@mui/icons-material/Edit";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const SidebarButtonGroup = ({ children }) => (
  <div className="flex gap-4">{children}</div>
);

const SideBarButton = ({ children, onClick }) => (
  <button
    className="border rounded-full border-grays-gray p-2 bg-primary-tab drop-shadow-md hover:bg-primary-hover hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] focus:bg-primary-dark focus:shadow-inner"
    onClick={onClick}
  >
    {children}
  </button>
);

const SidebarTabSection = ({ children }) => (
  <div className="mt-20 flex flex-col items-start gap-4">{children}</div>
);

const SidebarTabItem = ({ children }) => (
  <button className="pt-2 pb-1 pl-4 pr-10 bg-primary-tab border rounded-lg border-grays-gray drop-shadow-md hover:bg-primary-hover hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)] focus:bg-primary-dark focus:shadow-inner">
    {children}
  </button>
);

const SideBar = () => {
  const [isEditIcon, setIsEditIcon] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const navItems = [
    "Home",
    "Banger Websites",
    "Quotes",
    "Stories",
    "Poems",
    "Shayaris",
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
          <SidebarTabItem key={index}>{item}</SidebarTabItem>
        ))}
      </SidebarTabSection>
    </>
  );
};

export default SideBar;
