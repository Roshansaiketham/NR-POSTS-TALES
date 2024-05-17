export const user = {
  _id: "64df3c064180b81adfe41d4b",
  firstName: "Roshan",
  lastName: "sai",
  email: "codewavewithasante@gmail.com",
  friends: [
    {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Sai",
      lastName: "K",
      email: "james@gmail.com",
      friends: ["64df3c064180b81adfe41d4b", "64df3aec4180b81adfe41d32"],
      views: [
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
        "64df39704180b81adfe41d0b",
      ],
      verified: true,
      createdAt: "2023-08-18T09:27:12.064Z",
      updatedAt: "2023-08-21T06:46:26.798Z",
      __v: 8,
      location: "Mumbai, India",
      profession: "Web Developer",
    },
    {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Nl_ragolu",
      lastName: "priyanka",
      email: "john@gmail.com",
      profession: "Full-Stack Developer",
      friends: ["64df3c064180b81adfe41d4b", "64df39704180b81adfe41d0b"],
      views: [],
      verified: true,
      createdAt: "2023-08-18T09:33:32.519Z",
      updatedAt: "2023-08-18T09:49:19.475Z",
      __v: 2,
      profileUrl: "https://img.lovepik.com/photo/48008/4889.jpg_wh860.jpg",
    },

    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Gangotri",

      email: "user!@gmail.com",
      friends: ["64df3c064180b81adfe41d4b"],
      views: [],
      verified: true,
      createdAt: "2023-08-18T10:04:59.677Z",
      updatedAt: "2023-08-18T10:09:20.006Z",
      __v: 1,
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Meghana",

      email: "user!@gmail.com",
      friends: ["64df3c064180b81adfe41d4b"],
      views: [],
      verified: true,
      createdAt: "2023-08-18T10:04:59.677Z",
      updatedAt: "2023-08-18T10:09:20.006Z",
      __v: 1,
    },
    {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Dileep",
      lastName: "kumar",
      email: "user!@gmail.com",
      friends: ["64df3c064180b81adfe41d4b"],
      views: [],
      verified: true,
      createdAt: "2023-08-18T10:04:59.677Z",
      updatedAt: "2023-08-18T10:09:20.006Z",
      __v: 1,
    },
  ],
  views: [
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
    "64df39704180b81adfe41d0b",
  ],
  verified: true,
  createdAt: "2023-08-18T09:38:14.179Z",
  updatedAt: "2023-08-21T06:46:18.258Z",
  profileUrl:
    "https://thumbs.dreamstime.com/b/hungry-boy-dry-land-back-view-created-generative-ai-technology-ai-generated-hungry-boy-dry-land-back-view-290211210.jpg",
  token: "hZWFmZmU3NmMiLCJpYXQiOjE2OTIwMzY5",
};

export const friends = [
  {
    _id: "64df3aec4180b81adfe41d32",
    firstName: "Hara",
    lastName: "Chandra",
    email: "john@gmail.com",
    profileUrl: "https://res.cloudinary.com/demo/image/upload/robot.jpg",
  },
  {
    _id: "64df39704180b81adfe41d0b",
    firstName: "Boyina",
    lastName: "Sreekar",
    email: "james@gmail.com",
    location: "Mumbai, India",
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    firstName: "Lohith",
    lastName: "kumar",
    email: "user!@gmail.com",
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    firstName: "Pavan",
    lastName: "kumar",
    email: "user!@gmail.com",
  },
];

export const requests = [
  {
    _id: "64df3aec4180b81adfe41d32",
    requestFrom: friends[0],
  },
  {
    _id: "64df39704180b81adfe41d0b",
    requestFrom: friends[1],
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    requestFrom: friends[2],
  },
  {
    _id: "64df424b4a4c0d47b5369f66",
    requestFrom: friends[3],
  },
];

export const suggest = [
  {
    _id: "64df3aec4180b81adfe41d32",
    ...friends[0],
  },
  {
    _id: "64df39704180b81adfe41d0b",
    ...friends[1],
  },
  {
    _id: "64df424b4a4c0d47b5369f65",
    ...friends[2],
  },
];
export const posts = [
  {
    _id: "64e2fe620d7868ecff1a6a86",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Nadhini",

      profileUrl:
        "https://tse2.mm.bing.net/th/id/OIG4.3PubDfHhcSHbq_l_BRFg?pid=ImgGn",
      location: "India,Vizag",
    },
    description:
      "Hello everyone, this is a new look of technology. check it out. thank you",
    image: "https://tse1.mm.bing.net/th/id/OIG1.t5ZhPu9f09XlNOKrH4Xx?pid=ImgGn",
    likes: ["64df3c064180b81adfe41d4b"],
    comments: [],
    createdAt: "2023-08-21T06:04:18.297Z",
    updatedAt: "2023-08-21T06:04:18.297Z",
    __v: 0,
  },
  {
    _id: "64e1cdd64baffca670364c8c",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Ganesh",

      profileUrl:
        "https://tse2.mm.bing.net/th/id/OIG3.hSmXOmMDy.EADWKQpXNv?w=1024&h=1024&rs=1&pid=ImgDetMain",
      location: "Mumbai, India",
    },
    description:
      "Absolutely! Technology has a remarkable way of bringing people together and enriching our lives. Through 'Nr Posts Tales', CEO Ketam Roshan Sai and Developer Priynaka Ragolu have harnessed this power to create a platform that fosters connections and creativity. Their partnership exemplifies the collaborative spirit that drives innovation in the tech industry, making a positive impact on users worldwide. It's a testament to the endless possibilities technology offers when used to empower and uplift others.",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-20T08:24:54.330Z",
    updatedAt: "2023-08-21T03:23:24.809Z",
    __v: 0,
  },
  {
    _id: "64df437e4a4c0d47b536a002",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Priya",
    },
    description:
      "Its a awesome Technology to posts and utilize the peoples in daily life! ",
    likes: ["64df424b4a4c0d47b5369f65"],
    comments: ["64e2d1c977e497bd3a0bf67b"],
    createdAt: "2023-08-18T10:10:06.969Z",
    updatedAt: "2023-08-21T02:54:01.806Z",
    __v: 0,
    image:
      "https://tse1.mm.bing.net/th/id/OIG3.AF443bXb9FmxFtPoV4iP?w=1024&h=1024&rs=1&pid=ImgDetMain",
  },
  {
    _id: "64df43714a4c0d47b5369fef",
    userId: {
      _id: "64df3c064180b81adfe41d4b",
      firstName: "Prashanth",

      profileUrl:
        "https://tse1.mm.bing.net/th/id/OIP.s-_bSu0sRPe2w6TNG21nyAHaHa?rs=1&pid=ImgDetMain",
    },
    description:
      "In this app the user easily connect and explore the social media apps fastly ",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-18T10:09:53.009Z",
    updatedAt: "2023-08-21T03:35:18.541Z",
    __v: 0,
  },
  {
    _id: "64df42dc4a4c0d47b5369f8a",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Prashanth",
    },
    description:
      " NR Posts Tales is a crazy website to explore the Enterniment ",
    likes: ["64df424b4a4c0d47b5369f65"],
    comments: [],
    createdAt: "2023-08-18T10:07:24.023Z",
    updatedAt: "2023-08-18T10:11:00.348Z",
    __v: 0,
    image:
      "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/90c4cf92081719.5e427cf2ec625.png",
  },
  {
    _id: "64df42b04a4c0d47b5369f77",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "Manoj",
    },
    description:
      "Nr Posts Tales is a fantastic social media platform! I'm impressed by its features and the variety of content available. It's intuitive to use, and I love how easy it is to connect with others. The design is sleek and modern, making the whole experience enjoyable. Nr Posts Tales has quickly become my go-to for social networking. Highly recommend checking it out! ",
    likes: [],
    comments: [],
    createdAt: "2023-08-18T10:06:40.339Z",
    updatedAt: "2023-08-18T10:06:40.339Z",
    __v: 0,
  },
  {
    _id: "64df41114a4c0d47b5369f02",
    userId: {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Vennela ",

      profileUrl:
        "https://tse4.mm.bing.net/th/id/OIG3.Zhk48JJ3tjVLCZy7hJmg?w=1024&h=1024&rs=1&pid=ImgDetMain",
    },
    description:
      " Just started using Nr Posts Tales and I'm loving it! 🌟 It's a fantastic social media platform with a sleek design and tons of interesting content. 📱 The interface is user-friendly, making it easy to navigate. 👍 I'm impressed by the variety of posts and the sense of community on Nr Posts Tales.  Definitely recommend checking it out! #NrPostsTales #SocialMedia #Explore",
    likes: ["64df39704180b81adfe41d0b"],
    comments: [],
    createdAt: "2023-08-18T09:59:45.876Z",
    updatedAt: "2023-08-18T10:01:35.333Z",
    __v: 0,
  },
  {
    _id: "64df3ef86c2bd953c7b43193",
    userId: {
      _id: "64df3c064180b81adfe41d4b",
      firstName: "Dileep kumar yadhav",

      profileUrl:
        "https://tse4.mm.bing.net/th/id/OIG1.Buiu9_7VLXX8X08ZzkRd?w=1024&h=1024&rs=1&pid=ImgDetMain",
    },
    description:
      "Nr Posts Tales has become my ultimate destination for watching and listening! The platform offers a diverse range of content, including music, podcasts, and videos, ensuring there's always something exciting to tune into. The video quality is top-notch, providing a truly immersive experience, while the audio is crystal clear, enhancing the overall listening pleasure. Whether I'm unwinding at home or on the move, Nr Posts Tales never fails to impress with its engaging content and seamless user experience. If you're looking for a platform that caters to your entertainment needs, Nr Posts Tales is the way to go! #NrPostsTales #Entertainment",
    likes: [
      "64df3aec4180b81adfe41d32",
      "64df424b4a4c0d47b5369f65",
      "64df39704180b81adfe41d0b",
    ],
    comments: [
      "64df41304a4c0d47b5369f0d",
      "64df41b14a4c0d47b5369f4d",
      "64df43e04a4c0d47b536a02a",
    ],
    createdAt: "2023-08-18T09:50:48.398Z",
    updatedAt: "2023-08-21T03:36:36.745Z",
    __v: 0,
    image:
      "https://tse2.mm.bing.net/th/id/OIG1.BEZ_10J8eYEUYMQhjmhr?w=1024&h=1024&rs=1&pid=ImgDetMain",
  },
  {
    _id: "64df3ed06c2bd953c7b43172",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "Sai kumar",

      profileUrl:
        "https://tse4.mm.bing.net/th/id/OIG2..Sw5_NvBl9VC9essvltP?w=1024&h=1024&rs=1&pid=ImgDetMain",
      location: "Mumbai, India",
    },
    description:
      " Excited to announce that as CEO of Nr Posts Tales, I'm collaborating with the talented developer Priyanka Garu to bring you exciting new updates! 🚀 Together, we're working to enhance your social media experience and create a platform that truly connects and inspires. Stay tuned for what's coming next! #NrPostsTales #Collaboration",
    likes: ["64df39704180b81adfe41d0b"],
    comments: ["64e2dc8577e497bd3a0bf843"],
    createdAt: "2023-08-18T09:50:08.431Z",
    updatedAt: "2023-08-21T03:44:36.962Z",
    __v: 0,
    image:
      "https://tse3.mm.bing.net/th/id/OIG1.kxyTmMA5ju_emsw3hJ3j?w=1024&h=1024&rs=1&pid=ImgDetMain",
  },
];

export const postComments = [
  {
    _id: "64df43e04a4c0d47b536a02a",
    userId: {
      _id: "64df424b4a4c0d47b5369f65",
      firstName: "User",
      lastName: "One",
    },
    postId: "64df3ef86c2bd953c7b43193",
    comment: "hahahah",
    from: "User One",
    likes: ["64df39704180b81adfe41d0b"],
    replies: [],
    createdAt: "2023-08-18T10:11:44.091Z",
    updatedAt: "2023-08-21T03:37:03.927Z",
    __v: 0,
  },
  {
    _id: "64df41b14a4c0d47b5369f4d",
    userId: {
      _id: "64df39704180b81adfe41d0b",
      firstName: "MTech",
      lastName: "Solutions",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
      location: "Mumbai, India",
    },
    postId: "64df3ef86c2bd953c7b43193",
    comment: "i would like to have them in my house",
    from: "MTech Solutions",
    likes: ["64df39704180b81adfe41d0b"],
    replies: [],
    createdAt: "2023-08-18T10:02:25.492Z",
    updatedAt: "2023-08-21T03:27:57.602Z",
    __v: 0,
  },
  {
    _id: "64df41304a4c0d47b5369f0d",
    userId: {
      _id: "64df3aec4180b81adfe41d32",
      firstName: "Akwasi",
      lastName: "Asante",
      profileUrl:
        "https://res.cloudinary.com/djs3wu5bg/image/upload/v1683874470/cld-sample.jpg",
    },
    postId: "64df3ef86c2bd953c7b43193",
    comment: "This dogs are too serious!",
    from: "Akwasi Asante",
    likes: ["64df39704180b81adfe41d0b"],
    replies: [
      {
        userId: {
          _id: "64df39704180b81adfe41d0b",
          firstName: "MTech",
          lastName: "Solutions",
          profileUrl:
            "https://res.cloudinary.com/djs3wu5bg/image/upload/v1692299991/SOCIALMEDIA/fvws1unsqytcqketv78w.png",
          location: "Mumbai, India",
        },
        from: "MTech Solutions",
        replyAt: "Akwasi Asante",
        comment: "Not easy, hahahah",
        created_At: "2023-08-18T10:01:08.771Z",
        updated_At: "2023-08-18T09:56:38.344Z",
        likes: [],
        _id: "64df41644a4c0d47b5369f24",
      },
    ],
    createdAt: "2023-08-18T10:00:16.352Z",
    updatedAt: "2023-08-18T10:01:14.090Z",
    __v: 1,
  },
];
