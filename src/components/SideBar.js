import { Stack } from "@mui/material";
import { color } from "@mui/system";
import { categories } from "../utils/constants";

const SideBar = ({selectedCategory,setSelectedCategory}) => (
    <Stack
        direction={"row"}
        sx={{
            flexDirection: { xs: "row", md: "column" },
            overflowY: "auto",
            height: { xs: "auto", md: "95%" }
        }}
    >
        {
            categories.map((category) => (
                <button 
                className="category-btn"
                style={{
                    background: category.name === selectedCategory && "#FC1503",
                    color: "white"
                }}
                onClick={() => setSelectedCategory(category.name)}
                key={category.name}
                >
                    <span
                    style={{marginRight:"15px",color:category.name !== selectedCategory && "#FC1503"}}
                    >
                        {category.icon}
                    </span>
                    <span
                    style={{opacity:category.name === selectedCategory ? "1":"0.8"}}
                    >
                        {category.name}
                    </span>
                </button>
            ))
        }
    </Stack>
);

export default SideBar;