import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LiaEditSolid } from "react-icons/lia";
import {
  BsBriefcase,
  BsFacebook,
  BsInstagram,
  BsPersonFillAdd,
} from "react-icons/bs";
import { FaQuora } from "react-icons/fa";
import { FaSnapchatGhost } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitterSquare } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import moment from "moment";

import { NoProfile } from "../assets";
import { UpdateProfile } from "../redux/userSlice";

const ProfileCard = ({ user }) => {
  const { user: data, edit } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="w-full bg-primary flex flex-col items-center shadow-sm rounded-xl px-6 py-4 ">
        <div className="w-full flex items-center justify-between border-b pb-5 border-[#66666645]">
          <Link to={"/profile/" + user?._id} className="flex gap-2">
            <img
              src={user?.profileUrl ?? NoProfile}
              alt={user?.email}
              className="w-14 h-14 object-cover rounded-full"
            />

            <div className="flex flex-col justify-center">
              <p className="text-lg font-medium text-ascent-1">
                {user?.firstName} {user?.lastName}
              </p>
              <span className="text-ascent-2">
                {user?.profession ?? "No Profession"}
              </span>
            </div>
          </Link>

          <div className="">
            {user?._id === data?._id ? (
              <LiaEditSolid
                size={22}
                className="text-blue cursor-pointer"
                onClick={() => dispatch(UpdateProfile(true))}
              />
            ) : (
              <button
                className="bg-[#0444a430] text-sm text-white p-1 rounded"
                onClick={() => {}}
              >
                <BsPersonFillAdd size={20} className="text-[#0f52b6]" />
              </button>
            )}
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <div className="flex gap-2 items-center text-ascent-2">
            <CiLocationOn className="text-xl text-ascent-1" />
            <span>{user?.location ?? "Add Location"}</span>
          </div>

          <div className="flex gap-2 items-center text-ascent-2">
            <BsBriefcase className=" text-lg text-ascent-1" />
            <span>{user?.profession ?? "Add Profession"}</span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 py-4 border-b border-[#66666645]">
          <p className="text-xl text-ascent-1 font-semibold">
            {user?.friends?.length} Friends
          </p>

          <div className="flex items-center justify-between">
            <span className="text-ascent-2">Who viewed your profile</span>
            <span className="text-ascent-1 text-lg">{user?.views?.length}</span>
          </div>

          <span className="text-base text-blue">
            {user?.verified ? "Verified Account" : "Not Verified"}
          </span>

          <div className="flex items-center justify-between">
            <span className="text-ascent-2">Joined</span>
            <span className="text-ascent-1 text-base">
              {moment(user?.createdAt).fromNow()}
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col gap-4 py-4 pb-6">
          <p className="text-ascent-1 text-lg font-semibold">Social Profile</p>

          <div className="flex gap-2 items-center text-ascent-2">
            <BsInstagram className=" text-xl text-ascent-1" />
            <span>
              <a
                href="https://www.instagram.com/"
                target="https://www.instagram.com/"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </span>
            <button className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full">
              Connect
            </button>
            <Link
              to="https://en.wikipedia.org/wiki/Instagram"
              className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full"
            >
              About
            </Link>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <FaTwitterSquare className=" text-xl text-ascent-1" />
            <span>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </span>
            <button className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full">
              Connect
            </button>
            <Link
              to="https://en.wikipedia.org/wiki/Twitter"
              className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full"
            >
              About
            </Link>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <BsFacebook className=" text-xl text-ascent-1" />
            <span>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </span>
            <button className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full">
              Connect
            </button>
            <Link
              to="https://en.wikipedia.org/wiki/Facebook"
              className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full"
            >
              About
            </Link>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <FaLinkedinIn className=" text-xl text-ascent-1" />
            <span>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Linkedin
              </a>
            </span>
            <button className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full">
              Connect
            </button>
            <Link
              to="https://en.wikipedia.org/wiki/LinkedIn"
              className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full"
            >
              About
            </Link>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <FaSnapchatGhost className=" text-xl text-ascent-1" />
            <span>
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Snap Chat
              </a>
            </span>
            <button className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full">
              Connect
            </button>
            <Link
              to="https://en.wikipedia.org/wiki/Snapchat"
              className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full"
            >
              About
            </Link>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <FaTelegramPlane className=" text-xl text-ascent-1" />
            <span>
              <a
                href="https://telegram.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Telegram
              </a>
            </span>
            <button className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full">
              Connect
            </button>
            <Link
              to="https://en.wikipedia.org/wiki/Telegram_(software)"
              className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full"
            >
              About
            </Link>
          </div>
          <div className="flex gap-2 items-center text-ascent-2">
            <FaQuora className=" text-xl text-ascent-1" />
            <span>
              <a
                href="https://www.quora.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Quora
              </a>
            </span>
            <button className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full">
              Connect
            </button>
            <Link
              to="https://en.wikipedia.org/wiki/Quora"
              className="border border-blue-500 text-blue font-bold py-1 px-2 rounded-full"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
