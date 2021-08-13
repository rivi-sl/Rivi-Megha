import React, { useEffect, useState } from "react";
import * as styles from "../../../Pages/MainWindows/MainWindowStyles/PrivateChat.module.css";
import moment from "moment";
import Linkify from "react-linkify";
import axios from "axios";
import _ from "lodash";

export const ChatOut = (props) => {
  const { message, lastUser, timeStamp } = props;
  const [metaData, setMetaData] = useState({
    imgLink: "https://i.ibb.co/Jd2xvP2/website-Preloader-Thumbnail.png",
    title: "Web Link Previewer",
    desc: "This is Sample Web Link Previewer and this is the long description",
  });
  const checkForUrlToGetMetaTagData = async (message_string) => {
    let urlCheckerRegexExpression = /(?:https?|ftp):\/\/[\n\S]+/g;
    if (urlCheckerRegexExpression.test(message_string)) {
      var match = message_string.match(urlCheckerRegexExpression);
      const config = {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        params: {
          url: match[0],
        },
      };
      axios
        .get("https://meta-data-scraper.herokuapp.com/url", config)
        .then(function (response) {
          let urlMetaData = response.data;
          setMetaData({
            title: urlMetaData.title,
            desc: urlMetaData.description,
            imgLink: urlMetaData.image ? urlMetaData.image : urlMetaData.logo,
          });
          // console.log(urlMetaData)
        })
        .catch((error) => {
          console.log(error);
        });
      setMetaTagState(urlCheckerRegexExpression.test(message_string));
    } else {
      setMetaTagState(urlCheckerRegexExpression.test(message_string));
    }
  };
  const [metaTagState, setMetaTagState] = useState(false);
  useEffect(() => {
    checkForUrlToGetMetaTagData(message);
  }, []);
  const hrefDecorator = (href, text, key) => (
    <a href={href} key={key} target="_blank" className={styles.urlDecor}>
      {text}
    </a>
  );
  return (
    <div className={lastUser ? styles.chatOutBoxWO : styles.chatOutBox}>
      <span>
        <Linkify componentDecorator={hrefDecorator}>{message}</Linkify>
      </span>
      <span className={styles.timeStamp}>{moment(timeStamp).format("LT")}</span>
      {metaTagState ? (
        <div className={styles.metaInfoSection}>
          <img src={metaData.imgLink} alt="imagePreloader" />
          <div>
            <span className={styles.metaTitle}>
              {_.truncate(metaData.title, {
                length: 20,
                omission: "...",
              })}
            </span>
            <span className={styles.metaDescription}>
              {_.truncate(metaData.desc, {
                length: 50,
                omission: "...",
              })}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ChatOut;
