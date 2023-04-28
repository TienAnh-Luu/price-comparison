import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  resultContainer: {
    border: "0.05px solid rgba(0,0,0,0.2)",
    width: "340px",
    minHeight: "300px",
    padding: "20px",
    marginBottom: "50px",
  },
  thumbnailContainer: {
    width: "100%",
    height: "200px",
    marginBottom: "5px",
  },
  thumbnail: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },
  title: {
    marginBottom: "5px",
  },
  ratingContainer: {
    marginBottom: "3px",
  },
  ratingIcon: {
    color: "#ffdf00",
    marginRight: "3px",
  },
  price: {
    marginBottom: "3px",
  },
  link: {
    color: "black",
    marginBottom: "3px",
    transition: "all 0.2s",
    "&:hover": {
      color: "blue",
    },
  },
});

const createStarIcons = (rating, classes) => {
  const n = Math.ceil(rating);
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(
      <FontAwesomeIcon
        key={`icon ${i}`}
        icon={faStar}
        className={classes.ratingIcon}
      />
    );
  }
  return res;
};

const Card = ({ data = {}, isLoading = false }) => {
  const classes = useStyles();

  if (isLoading) {
    return <div className={classes.resultContainer}>Loading...</div>;
  }

  if (!data.hasOwnProperty("title")) {
    return <div className={classes.resultContainer}>Data Box</div>;
  }

  return (
    <div className={classes.resultContainer}>
      <div className={classes.thumbnailContainer}>
        <img
          src={data.thumbnail}
          alt='thumbnail'
          className={classes.thumbnail}
        />
      </div>
      <div className={classes.infoContainer}>
        <p className={classes.title}>{data.title}</p>
        <div className={classes.ratingContainer}>
          {createStarIcons(data.rating, classes)}
        </div>
        <p className={classes.price}>Price: {data.price}</p>
        <a
          href={data.link}
          className={classes.link}
          target='_blank'
          rel='noreferrer'
        >
          Link to production
        </a>
        <p>From {data.from}</p>
      </div>
    </div>
  );
};

export default Card;
