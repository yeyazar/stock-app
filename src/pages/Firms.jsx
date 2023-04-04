import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import useStockCall from "../hooks/useStockCall";
import { useSelector } from "react-redux";
import { Grid } from "@mui/material";
import FirmCard from "../components/FirmCard";
import { flex } from "../styles/globalStyle";
import FirmModal from "../components/modals/FirmModal";

const Firms = () => {
  const { getStockData } = useStockCall();

  const { firms } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    address: "",
    image: "",
  });

  useEffect(() => {
    getStockData("firms");
  }, []);

  return (
    <div>
      <Typography variant="h4" color="error" mb={3}>
        Firm
      </Typography>
      <Button variant="contained" sx={{ mb: "1rem" }} onClick={handleOpen}>
        New Firm
      </Button>
      <FirmModal
        open={open}
        handleClose={handleClose}
        info={info}
        setInfo={setInfo}
      />
      <Grid container sx={flex}>
        {firms?.map((firm) => (
          <Grid item key={firm.id}>
            <FirmCard
              firm={firm}
              setOpen={setOpen}
              info={info}
              setInfo={setInfo}
            />
          </Grid>
        ))}
      </Grid>
      ;
    </div>
  );
};

export default Firms;
