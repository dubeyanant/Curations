import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BookOpen, PencilLine, LightbulbOff, Lightbulb } from "lucide-react";
import {
  toggleEditIcon,
  toggleDarkMode,
  setSelectedTab,
} from "../config/store";

const SidebarButtonGroup = ({ children }) => (
  <div className="flex gap-4 mt-4">{children}</div>
);

const SideBarButton = ({ children, isClicked, onClick }) => {
  const dispatch = useDispatch();

  const buttonClasses = isClicked
    ? "bg-primary-dark shadow-inner"
    : "bg-primary-tab drop-shadow-md hover:bg-primary-hover hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]";

  const handleButtonClick = () => {
    onClick(); // Call the specific onClick handler passed as a prop
  };

  return (
    <button
      className={"border rounded-full border-grays-gray p-2 " + buttonClasses}
      onClick={handleButtonClick}
    >
      {children}
    </button>
  );
};

const SidebarTabSection = ({ children }) => (
  <div className="mt-20 flex flex-col items-start gap-4">{children}</div>
);

const SidebarTabItem = ({ children, isSelected, onClick }) => {
  const dispatch = useDispatch();

  const tabClasses = isSelected
    ? "bg-primary-dark shadow-inner"
    : "bg-primary-tab drop-shadow-md hover:bg-primary-hover hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]";

  return (
    <button
      className={
        "pt-2 pb-1 pl-4 pr-10 border rounded-lg border-grays-gray " + tabClasses
      }
      onClick={() => {
        dispatch(setSelectedTab(isSelected));
        onClick();
      }}
    >
      {children}
    </button>
  );
};

const SideBar = () => {
  const isEditIcon = useSelector((state) => state.isEditIcon);
  const isDarkMode = useSelector((state) => state.isDarkMode);
  const selectedTab = useSelector((state) => state.selectedTab);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const currentPath = window.location.pathname;
    const foundIndex = navItems.findIndex((item) => item.to === currentPath);
    if (foundIndex !== -1) {
      dispatch(setSelectedTab(foundIndex));
    }
  }, [dispatch]);

  const handleTabClick = (index, to) => {
    dispatch(setSelectedTab(index));
    navigate(to);
  };

  const handleEditIconClick = () => {
    console.log("Edit icon clicked");
    // setIsEditIconClicked(!isEditIconClicked);
    dispatch(toggleEditIcon());
  };

  const handleDarkModeClick = () => {
    dispatch(toggleDarkMode()); // Update with your actual action
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Banger Websites", to: "/websites" },
    { label: "Quotes", to: "/quotes" },
  ];

  return (
    <>
      <SidebarButtonGroup>
        <SideBarButton onClick={handleEditIconClick} isClicked={isEditIcon}>
          {isEditIcon ? <PencilLine /> : <BookOpen />}
        </SideBarButton>
        <SideBarButton onClick={handleDarkModeClick} isClicked={isDarkMode}>
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
