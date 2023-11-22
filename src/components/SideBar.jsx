import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { BookOpen, PencilLine, LightbulbOff, Lightbulb } from "lucide-react";

const SidebarButtonGroup = ({ children }) => (
  <div className="flex gap-4 mt-4">{children}</div>
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

const SidebarTabItem = ({ children, isSelected, onClick }) => {
  const tabClasses = isSelected
    ? "bg-primary-dark shadow-inner"
    : "bg-primary-tab drop-shadow-md hover:bg-primary-hover hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]";

  return (
    <button
      className={
        "pt-2 pb-1 pl-4 pr-10 border rounded-lg border-grays-gray " + tabClasses
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const SideBar = () => {
  const [isEditIcon, setIsEditIcon] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedTab, setSelectedTab] = useState(0);

  const navigate = useNavigate();

  // Check the route and select the setSelectedTab effect on that route tab if no tab have setSelectedTab effect on
  useEffect(() => {
    const currentPath = window.location.pathname;
    const foundIndex = navItems.findIndex((item) => item.to === currentPath);
    if (foundIndex !== -1) {
      setSelectedTab(foundIndex);
    }
  }, []);

  const handleTabClick = (index, to) => {
    setSelectedTab(index);
    navigate(to);
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Banger Websites", to: "/websites" },
    { label: "Quotes", to: "/quotes" },
  ];

  return (
    <>
      <SidebarButtonGroup>
        <SideBarButton onClick={() => setIsEditIcon(!isEditIcon)}>
          {isEditIcon ? <PencilLine /> : <BookOpen />}
        </SideBarButton>
        <SideBarButton onClick={() => setIsDarkMode(!isDarkMode)}>
          {isDarkMode ? <LightbulbOff /> : <Lightbulb />}
        </SideBarButton>
      </SidebarButtonGroup>
      <SidebarTabSection>
        {navItems.map((item, index) => (
          <SidebarTabItem
            key={index}
            isSelected={index === selectedTab}
            onClick={() => handleTabClick(index, item.to)}
          >
            {item.label}
          </SidebarTabItem>
        ))}
      </SidebarTabSection>
    </>
  );
};

export default SideBar;
