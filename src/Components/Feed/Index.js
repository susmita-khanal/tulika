import React from "react";
import { useSelector } from "react-redux";
import "./Style.css";

const Feed = () => {
  const myTheme = useSelector((state) => state.changeTheme.theme);
  const textColor = myTheme === "light" ? "#000" : "#fff";
  return (
    <>
      <div
        className="Feed"
        style={{
          background: myTheme === "dark" ? "#000" : "#fff",
          color: textColor,
        }}
      >
        <div
          className="Feed-box1"
          style={{
            background: myTheme === "dark" ? "#000" : "#fff",
            color: textColor,
          }}
        >
          <div
            className="feed-box-small"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="Feed-sortby">Sort By</div>
            <div className="allfeed">
              All Feed <i className="fas fa-chevron-right"></i>
            </div>
            <div className="top-studios-part">
              <div className="top-studios">Top Studios</div>
              <div cl="image-data-list">
                <div className="img-data">
                  <img src="images/img-1.jpg" />
                  <div className="feed-profile-name">Sunil Gurung Arts</div>
                </div>
                <div className="img-data">
                  <img src="images/img-1.jpg" />
                  <div className="feed-profile-name">
                    Kishor Jyoti <br />
                    Young flame
                  </div>
                </div>
                <div className="img-data">
                  <img src="images/img-1.jpg" />
                  <div className="feed-profile-name">Artist Man</div>
                </div>
                <div className="img-data">
                  <img src="images/img-1.jpg" />
                  <div className="feed-profile-name">Krishna Maharjan</div>
                </div>
                <div className="img-data">
                  <img src="images/img-1.jpg" />
                  <div className="feed-profile-name">Bikrant Tandukar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="feed-Box2"
          style={{
            background: myTheme === "dark" ? "#000" : "#fff",
            color: textColor,
          }}
        >
          <div
            className="feed-box-part"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="feed-profile-img">
              <img src="images/img-1.jpg" />
            </div>
            <div className="box2-info">
              <div className="box2-profile-name">Ashim</div>
              <div className="box2-days">7days ago</div>
            </div>
          </div>
          <div className="feed-big-img">
            <img src="images/img-1.jpg" />
          </div>
          <div
            className="feed-comment-info"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="feed-desc">koryo ki balyo</div>
            <div className="image-icon-info">
              <div className="feed-heart">
                <i className="feed-icon far fa-heart"></i>
                <div className="abc">1</div>
              </div>
              <div className="feed-comment">
                <i className="feed-icon fal fa-comment"></i>
                <div className="abc">0</div>
              </div>
            </div>

            <div className="feed-field">
              <input
                type="text"
                placeholder="Write Comment"
                style={{
                  background: myTheme === "dark" ? "#000" : "#fff",
                  color: textColor,
                }}
              />
            </div>
          </div>

          <div
            className="feed-box-part"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="feed-profile-img">
              <img src="images/img-1.jpg" />
            </div>
            <div className="box2-info">
              <div className="box2-profile-name">Ashim</div>
              <div className="box2-days">7days ago</div>
            </div>
          </div>
          <div className="feed-big-img">
            <img src="images/img-1.jpg" />
          </div>
          <div
            className="feed-comment-info"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="feed-desc">koryo ki balyo</div>
            <div className="image-icon-info">
              <div className="feed-heart">
                <i className="feed-icon far fa-heart"></i>
                <div className="abc">1</div>
              </div>
              <div className="feed-comment">
                <i className="feed-icon fal fa-comment"></i>
                <div className="abc">0</div>
              </div>
            </div>

            <div className="feed-field">
              <input
                type="text"
                placeholder="Write Comment"
                style={{
                  background: myTheme === "dark" ? "#000" : "#fff",
                  color: textColor,
                }}
              />
            </div>
          </div>
          <div
            className="feed-box-part"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="feed-profile-img">
              <img src="images/img-1.jpg" />
            </div>
            <div className="box2-info">
              <div className="box2-profile-name">Ashim</div>
              <div className="box2-days">7days ago</div>
            </div>
          </div>
          <div className="feed-big-img">
            <img src="images/img-1.jpg" />
          </div>
          <div
            className="feed-comment-info"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="feed-desc">koryo ki balyo</div>
            <div className="image-icon-info">
              <div className="feed-heart">
                <i className="feed-icon far fa-heart"></i>
                <div className="abc">1</div>
              </div>
              <div className="feed-comment">
                <i className="feed-icon fal fa-comment"></i>
                <div className="abc">0</div>
              </div>
            </div>

            <div className="feed-field">
              <input
                type="text"
                placeholder="Write Comment"
                style={{
                  background: myTheme === "dark" ? "#000" : "#fff",
                  color: textColor,
                }}
              />
            </div>
          </div>
          <div
            className="feed-box-part"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="feed-profile-img">
              <img src="images/img-1.jpg" />
            </div>
            <div className="box2-info">
              <div className="box2-profile-name">Ashim</div>
              <div className="box2-days">7days ago</div>
            </div>
          </div>
          <div className="feed-big-img">
            <img src="images/img-1.jpg" />
          </div>
          <div
            className="feed-comment-info"
            style={{
              background: myTheme === "dark" ? "#000" : "#fff",
              color: textColor,
            }}
          >
            <div className="feed-desc">koryo ki balyo</div>
            <div className="image-icon-info">
              <div className="feed-heart">
                <i className="feed-icon far fa-heart"></i>
                <div className="abc">1</div>
              </div>
              <div className="feed-comment">
                <i className="feed-icon fal fa-comment"></i>
                <div className="abc">0</div>
              </div>
            </div>

            <div className="feed-field">
              <input
                type="text"
                placeholder="Write Comment"
                style={{
                  background: myTheme === "dark" ? "#000" : "#fff",
                  color: textColor,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
