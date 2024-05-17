import React from "react";
import { BsAlignMiddle } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { GiMusicalNotes } from "react-icons/gi";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import TextInput from "./TextInput";
import CustomButton from "./CustomButton";
import { useForm } from "react-hook-form";
import { CgDarkMode } from "react-icons/cg";
import { AiTwotoneNotification } from "react-icons/ai";
import { SetTheme } from "../redux/theme";
import { Logout } from "../redux/userSlice";

const TopBar = () => {
  const { theme } = useSelector((state) => state.theme);
  const { user } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleTheme = () => {
    const themeValue = theme === "light" ? "dark" : "light";
    dispatch(SetTheme(themeValue));
  };

  const handleSearch = async (data) => {};

  return (
    <div className="topbar w-full flex items-center justify-between py-3 md:py-6 px-4 bg-primary">
      <Link to="/" className="flex gap-2 items-center">
        <div className="p-1 md:p-2 bg-[#4682b4] rounded text-white">
          <BsAlignMiddle />
        </div>
        <span className="text-xl md:text-2xl text-[#4682b4] font-semibold">
          NR Post Tales
        </span>
      </Link>

      <form
        className="hidden md:flex items-center justify-center"
        onSubmit={handleSubmit(handleSearch)}
      >
        <TextInput
          placeholder="Search..."
          styles="w-[18rem] lg:w-[38rem]  rounded-l-full py-3 "
          register={register("search")}
        />
        <CustomButton
          title="Search"
          type="submit"
          containerStyles="bg-[#0444a4] text-white px-6 py-2.5 mt-2 rounded-r-full"
        />
      </form>

      {/* ICONS */}
      <div className="flex gap-4 items-center text-ascent-1 text-md md:text-xl">
        <button onClick={() => handleTheme()}>
          {theme ? <CgDarkMode /> : <CgDarkMode />}
        </button>
        <div className="hidden lg:flex">
          <AiTwotoneNotification />
        </div>

        <a
          href="https://www.jiosaavn.com/" // Replace with your URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-ascent-1 hover:text-ascent-2 transition-colors"
        >
          <GiMusicalNotes />
        </a>

        <a
          href="https://example.com/info" // Replace with your URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-ascent-1 hover:text-ascent-2 transition-colors"
        >
          <FaInfoCircle />
        </a>
      </div>

      <div>
        <CustomButton
          onClick={() => dispatch(Logout())}
          title="Log Out"
          containerStyles="text-sm text-ascent-1 px-4 md:px-6 py-1 md:py-2 border border-[#666] rounded-full"
        />
      </div>
    </div>
  );
};

export default TopBar;
