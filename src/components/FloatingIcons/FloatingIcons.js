import { Link } from "@mui/material";
import Badge from "@mui/material/Badge";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

const FloatingIcons = () => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
        zIndex: 1000, // Ensures icons stay above other elements
      }}
    >
      <Link href="tel:+1234567890" underline="none">
        <Badge
          color="info"
          sx={{
            cursor: "pointer",
            "& .MuiBadge-badge": {
              fontSize: "0.75rem",
              padding: "4px 8px",
              borderRadius: "8px",
            },
          }}
        >
          <PhoneIcon color="primary" fontSize="large" />
        </Badge>
      </Link>

      <Link href="https://m.me/username" underline="none"> {/* Replace with your Messenger link */}
        <Badge
          color="info"
          sx={{
            cursor: "pointer",
            "& .MuiBadge-badge": {
              fontSize: "0.75rem",
              padding: "4px 8px",
              borderRadius: "8px",
            },
          }}
        >
          <MessageIcon color="primary" fontSize="large" />  {/* Messenger Icon */}
        </Badge>
      </Link>

      <Link href="https://wa.me/1234567890" underline="none"> {/* Replace with your WhatsApp number */}
        <Badge
          color="info"
          sx={{
            cursor: "pointer",
            "& .MuiBadge-badge": {
              fontSize: "0.75rem",
              padding: "4px 8px",
              borderRadius: "8px",
            },
          }}
        >
          <WhatsAppIcon color="primary" fontSize="large" />  {/* WhatsApp Icon */}
        </Badge>
      </Link>
    </div>
  );
};

export default FloatingIcons;
