import createDataContext from "./createDataContext";
import { v4 } from "uuid";
const addContext = (state, action) => {
  switch (action.type) {
    case "Add_project":
      return [
        ...state,
        {
          id: v4(),
          title: action.payload.title,
          url: action.payload.link,
          description: action.payload.description,
        },
      ];
    default:
      return state;
  }
};

const addproject = (dispatch) => {
  return (title, link, description) => {
    dispatch({ type: "Add_project", payload: { title, link, description } });
  };
};

const initialState = [
  {
    id: v4(),
    url: "https://res.cloudinary.com/dafhhfgcj/image/upload/v1704442910/IMG_20240105_135031_kondda.jpg",
    title: "NxtTrends",
    link: "https://jeevanxttrendz.ccbp.tech",
    description:
      "Implemented Nxt Trendz application which is a clone for ECommerce applications " +
      "like Amazon, Flipkart where users can login and can see a list of products with " +
      "search, filters, sort by, etc..",
  },
  {
    id: v4(),
    url: "https://res.cloudinary.com/dafhhfgcj/image/upload/v1704442910/IMG_20240105_135009_tlguuw.jpg",
    title: "NxtWatch",
    link: "https://jeevanxtwatch.ccbp.tech",
    description:
      "Built the Nxt Watch application, modelled after YouTube, enabling users to log in, " +
      "explore video categories such as Trending and Gaming, access saved videos, and " +
      "search for specific content while adjusting the interface theme.",
  },
];

export const { Context, Provider } = createDataContext(
  addContext,
  { addproject },
  initialState
);
