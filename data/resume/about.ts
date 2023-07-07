import { Section } from "../types";

const about: Section = {
  title: "ABOUT",
  subsections: [
    {
      body: [
        {
          type: "list",
          items: [
            // {
            //   type: "link",
            //   text: "dmytro-oplachko.com",
            //   href: "https://dmytro-oplachko.com",
            // },
            // {
            //   type: "paragraph",
            //   items: [
            //     { type: "important", text: "Github: " },
            //     {
            //       type: "link",
            //       text: "github.com/debkh",
            //       href: "https://github.com/debkh",
            //     },
            //   ],
            // },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "LinkedIn: " },
                {
                  type: "link",
                  text: "linkedin.com/in/maxim-stepanenkov-9988a8166/",
                  href: "https://www.linkedin.com/in/maxim-stepanenkov-9988a8166/",
                },
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Email: " },
                {
                  type: "link",
                  text: "maxstepanenkov.dev@faceit-team.com",
                  href: "mailto:maxstepanenkov.dev@faceit-team.com",
                },
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Phone: " },
                "+380678802382",
              ],
            },
            {
              type: "paragraph",
              items: [
                { type: "important", text: "Last Updated: " },
                "Jul 7, 2023",
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default about;
