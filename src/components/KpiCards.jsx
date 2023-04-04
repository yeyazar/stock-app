import Grid from "@mui/material/Grid";
import { amber, deepPurple, pink } from "@mui/material/colors";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PaymentsIcon from "@mui/icons-material/Payments";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";
import { useSelector } from "react-redux";

const KpiCards = () => {
  const { sales, purchases } = useSelector((state) => state.stock);
  const iconSize = {
    ".MuiSvgIcon-root": { fontSize: "2rem" },
  };

  const totalSales = sales
    .map((sale) => Number(sale.price_total))
    .reduce((acc, val) => acc + val, 0);
  const totalPurchases = purchases
    .map((purchase) => Number(purchase.price_total))
    .reduce((acc, val) => acc + val, 0);

  const data = [
    {
      id: 1,
      title: "sales",
      value: `$${totalSales}`,
      icon: <MonetizationOnIcon sx={iconSize} />,
      color: deepPurple[600],
      bgColor: deepPurple[100],
    },
    {
      id: 2,
      title: "profit",
      value: `$${totalSales-totalPurchases}`,
      icon: <PaymentsIcon sx={iconSize} />,
      color: pink[600],
      bgColor: pink[100],
    },
    {
      id: 3,
      title: "purchases",
      value: `$${totalPurchases}`,
      icon: <ShoppingCartIcon sx={iconSize} />,
      color: amber[600],
      bgColor: amber[100],
    },
  ];

  return (
    <div>
      <Grid container justifyContent={"center"} spacing={3}>
        {data.map((item) => (
          <Grid
            item
            key={item.id}
            xs={12}
            sm={10}
            md={6}
            lg={4}
            sx={{ minWidth: "250px" }}
          >
            <Paper sx={{ p: 2 }} elevation={10}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 5 }}>
                <Avatar
                  sx={{
                    backgroundColor: item.bgColor,
                    color: item.color,
                    width: 70,
                    height: 70,
                    ml: 4,
                  }}
                >
                  {item.icon}
                </Avatar>

                <Box>
                  <Typography variant="button">{item.title}</Typography>
                  <Typography variant="h4">{item.value}</Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        ))}
        <Grid item></Grid>
      </Grid>
    </div>
  );
};

export default KpiCards;
