import {
  MenuRounded,
  CloseRounded,
  CategoryRounded,
} from "@mui/icons-material";
import {
  Button,
  Chip,
  Grid,
  IconButton,
  Modal,
  SelectChangeEvent,
  Stack,
  SvgIcon,
  SvgIconTypeMap,
  Typography,
} from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { Box } from "@mui/system";
import Router, { useRouter } from "next/router";
import { type } from "os";
import React, { FC, useContext } from "react";
import { animated, useSpring } from "react-spring";
import { CurrencyContext } from "../pages/_app";
import { RouteProps, routes } from "../utility/routes";
import { currencies, Currency } from "../utility/types";

export const MobileMenu: FC<{
  currency: Currency;
  handleCurrency: (c: Currency) => void;
}> = ({ currency, handleCurrency }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleNav = (route: string) => {
    handleClose();
    Router.push(route);
  };

  const handleCurr = (currency: string) => {
    handleClose();
    let newCurrency = currencies.find((c) => c.code === currency);

    if (newCurrency !== undefined) {
      handleCurrency(newCurrency);
    }
  };

  const router = useRouter();
  const currentCurrency = useContext(CurrencyContext);

  return (
    <>
      <IconButton onClick={handleOpen}>
        <MenuRounded />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Fade in={open}>
          <Box height="auto" width="100%" p={2}>
            <Box
              height="100%"
              width="100%"
              p={2}
              borderRadius={"1rem"}
              bgcolor={(theme) => theme.palette.secondary.main}
              color={(theme) => theme.palette.background.default}
            >
              <Box
                sx={{
                  width: "100%",
                  justifySelf: "flex-end",
                  display: "flex",
                  justifyContent: "flex-end",
                }}
              >
                <IconButton onClick={handleClose}>
                  <CloseRounded color="info" />
                </IconButton>
              </Box>

              <Box mt={-3}>
                <Stack spacing={3}>
                  <Box>
                    <Chip
                      sx={{ textTransform: "uppercase", fontWeight: 500 }}
                      clickable
                      onClick={() => handleNav("/team")}
                      color="info"
                      label="About Us"
                    />
                  </Box>
                  {router.pathname === "/" ? (
                    <></>
                  ) : (
                    <MobileMenuSection
                      title="Business Opportunities"
                      items={routes.map((x) => {
                        return { name: x.name, icon: x.icon, value: x.route };
                      })}
                      handleClick={handleNav}
                      selected={router.pathname}
                    />
                  )}
                  <MobileMenuSection
                    title="Currency"
                    items={currencies.map((x) => {
                      return { name: x.code + " " + x.symbol, value: x.code };
                    })}
                    handleClick={handleCurr}
                    selected={currency.code}
                  />
                </Stack>
              </Box>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

type MobileMenuItemProps = {
  name: string;
  icon?: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string;
  };
  value: string;
};

type MobileMenuSectionProps = {
  title: string;
  items: MobileMenuItemProps[];
  handleClick: (route: string) => void;
  selected: string;
};

const MobileMenuSection: FC<MobileMenuSectionProps> = ({
  title,
  items,
  handleClick,
  selected,
}) => {
  return (
    <Stack spacing={1} width={"100%"}>
      <Box>
        <Chip
          label={title}
          color="info"
          sx={{ textTransform: "uppercase", fontWeight: 500 }}
        />
      </Box>
      <Grid container>
        {items.map((item, key) => {
          return (
            <Grid key={key} item xs={6}>
              <Button
                onClick={() => {
                  handleClick(item.value);
                }}
                color="info"
                startIcon={
                  item.icon ? <SvgIcon component={item.icon} /> : <></>
                }
                variant={item.value === selected ? "outlined" : "text"}
              >
                {item.name}
              </Button>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
};

interface FadeProps {
  children?: React.ReactElement;
  in: boolean;
  onEnter?: () => {};
  onExited?: () => {};
}

const Fade = React.forwardRef<HTMLDivElement, FadeProps>(function Fade(
  props,
  ref
) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});
