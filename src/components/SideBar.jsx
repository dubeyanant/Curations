import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BookOpen, PencilLine, LightbulbOff, Lightbulb } from "lucide-react";
import { toggleEditIcon } from "../config/store";

const SidebarButtonGroup = ({ children }) => (
  <div className="flex gap-4 mt-4">{children}</div>
);

const SideBarButton = ({ children, onClick, isClicked }) => {
  const buttonClasses = isClicked
    ? "bg-primary-dark shadow-inner"
    : "bg-primary-tab drop-shadow-md hover:bg-primary-hover hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.25)]";

  return (
    <button
      className={"border rounded-full border-grays-gray p-2 " + buttonClasses}
      onClick={onClick}
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
  const [isEditIconClicked, setIsEditIconClicked] = useState(false);
  const [isDarkModeClicked, setIsDarkModeClicked] = useState(false);
  const selectedTab = useSelector((state) => state.selectedTab);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  // Check the route and select the setSelectedTab effect on that route tab if no tab has setSelectedTab effect on
  useEffect(() => {
    const currentPath = window.location.pathname;
    const foundIndex = navItems.findIndex((item) => item.to === currentPath);
    if (foundIndex !== -1) {
      dispatch({ type: "SET_SELECTED_TAB", payload: foundIndex });
    }
  }, [dispatch]);

  const handleTabClick = (index, to) => {
    dispatch({ type: "SET_SELECTED_TAB", payload: index });
    navigate(to);
  };

  const handleEditIconClick = () => {
    setIsEditIconClicked(!isEditIconClicked);
    dispatch(toggleEditIcon());
  };

  const handleDarkModeClick = () => {
    setIsDarkModeClicked(!isDarkModeClicked);
    // Handle the dispatch or state update for dark mode here
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Banger Websites", to: "/websites" },
    { label: "Quotes", to: "/quotes" },
  ];

  return (
    <>
      <SidebarButtonGroup>
        <SideBarButton
          onClick={handleEditIconClick}
          isClicked={isEditIconClicked}
        >
          {isEditIconClicked ? <PencilLine /> : <BookOpen />}
        </SideBarButton>
        <SideBarButton
          onClick={handleDarkModeClick}
          isClicked={isDarkModeClicked}
        >
          {isDarkModeClicked ? <LightbulbOff /> : <Lightbulb />}
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
