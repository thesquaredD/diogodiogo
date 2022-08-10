import { ExpandMoreRounded, ArrowRightRounded } from "@mui/icons-material";
import {
  Button,
  Menu,
  MenuItem,
  MenuList,
  Stack,
  SvgIcon,
} from "@mui/material";
import { Box } from "@mui/system";
import Router, { useRouter } from "next/router";
import { FC, useState } from "react";
import { animated, useSpring } from "react-spring";
import { routes } from "../utility/routes";

const AnimatedButton = animated(Button);
const AnimatedStack = animated(Stack);

export const WebMenu: FC<{ currencyPicker: JSX.Element }> = ({
  currencyPicker,
}) => {
  const animationStyle = useSpring({
    delay: 200,
    to: { opacity: 1, translateY: 0 },
    from: { opacity: 0, translateY: -20 },
  });

  return (
    <AnimatedStack direction={"row"} spacing={2} style={{ ...animationStyle }}>
      <UseCaseComponent />
      <Button
        sx={{ px: 2 }}
        variant="text"
        color="secondary"
        onClick={() => Router.push("/team")}
      >
        about us
      </Button>
      {currencyPicker}
    </AnimatedStack>
  );
};

const UseCaseComponent = () => {
  const router = useRouter();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const buttonAnime = useSpring({
    delay: 100,
    to: { opacity: router.pathname === "/" ? 0 : 1 },
    from: { opacity: 0 },
  });

  return (
    <>
      <AnimatedButton
        id="basic-button"
        sx={{ px: 2 }}
        endIcon={<ExpandMoreRounded />}
        variant="text"
        color="secondary"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        Business Opportunities
      </AnimatedButton>
      <Menu
        sx={{ px: 10 }}
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {routes.map((route, key) => (
          <MenuItem
            key={key}
            onClick={() => {
              handleClose();
              Router.push(route.route);
            }}
          >
            <Stack direction="row" spacing={2}>
              <SvgIcon component={route?.icon || ArrowRightRounded} />
              <Box>{route.name}</Box>
            </Stack>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};
