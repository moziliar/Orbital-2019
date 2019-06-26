import React, { Component } from "react";
import { InfoConsumer } from "../context";
import CommentBox from "../CommentBox";
import Comments from "../Comments";
import styled from "styled-components";

class fassFoodDetails extends Component {
    constructor(props) {
        super(props);
        this.handleAddComment = this.handleAddComment.bind(this);
        this.state = {
            comments: []
        };
    }

    componentDidMount() {
        /* global Ably */
        const channel = Ably.channels.get("comments");

        channel.attach();
        channel.once("attached", () => {
            channel.history((err, page) => {
                /* create a new array with comments */
                const comments = Array.from(page.items, item => item.data);

                this.setState({ comments });

                /* subscribe to new comments */
                channel.subscribe((msg, err) => {
                    const commentObject = msg["data"];
                    this.handleAddComment(commentObject);
                });
            });
        });
    }

    handleAddComment(comment) {
        this.setState(prevState => {
            return {
                comments: [comment].concat(prevState.comments)
            };
        });
    }

    render() {
        return (
            <InfoConsumer>
                {data => {
                    const {
                        id,
                        headerTitle,
                        headerSubTitle,
                        headerText,
                        img,
                        title,
                        maps,
                        description
                    } = data.detailInfo;

                    return (
                        <React.Fragment>
                            {/* Nav Link */}
                            <div className="container">
                                <ul className="nav nav-tabs mt-5">
                                    {/* About Food Link */}
                                    <li className="nav-item">
                                        <a
                                            href="#aboutFood"
                                            className="nav-link active"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            About Food
                                        </a>
                                    </li>
                                    {/* Reviews Link */}
                                    <li className="nav-item">
                                        <a
                                            href="#reviews"
                                            className="nav-link"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            Reviews
                                        </a>
                                    </li>
                                    {/* Map Link */}
                                    <li className="nav-item">
                                        <a
                                            href="#map"
                                            className="nav-link"
                                            role="tab"
                                            data-toggle="tab"
                                        >
                                            Map
                                        </a>
                                    </li>
                                </ul>
                                {/* Tab Pane */}
                                <div className="tab-content mb-5">
                                    {/* About Food Tab */}
                                    <div
                                        id="aboutFood"
                                        className="tab-pane in active text-center mt-5"
                                        role="tabpanel"
                                    >
                                        <h2 className="mb-3">{title}</h2>
                                        <p>{description}</p>
                                        <img
                                            src={img}
                                            alt={title}
                                            className="img-thumbnail img-fluid"
                                        />
                                    </div>
                                    {/* Reviews */}
                                    <div
                                        className="tab-pane"
                                        id="reviews"
                                        role="tabpanel"
                                    >
                                        <div className="columns mt-5">
                                            <div className="column is-half is-offset-one-quarter">
                                                <CommentBox
                                                    handleAddComment={
                                                        this.handleAddComment
                                                    }
                                                />
                                                <Comments
                                                    comments={
                                                        this.state.comments
                                                    }
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Map */}
                                    <div
                                        className="tab-pane"
                                        id="map"
                                        role="tabpanel"
                                    >
                                        <iframe
                                            src={maps}
                                            style={{
                                                border: "0",
                                                height: "28.125rem",
                                                width: "100%",
                                                frameborder: "0"
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    );
                }}
            </InfoConsumer>
        );
    }
}

export default fassFoodDetails;

const HeaderDetails = styled.header`
    background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
    height: 100vh;
    text-transform: uppercase;
    color: var(--mainWhite);
    text-align: center;

    h1 {
        padding-top: 10%;
        color: var(--mainDark);
    }

    h4 {
        color: var(--mainDark);
    }

    p {
        padding-left: 10%;
        padding-right: 10%;
        margin-bottom: 10%;
        color: var(--mainDark);
    }

    i {
        font-size: 1.875rem;
        color: var(--mainDark);
    }

    i:hover {
        color: var(--mainBlue);
        cursor: pointer;
    }

    .nav-item {
        height: 18.75rem;
    }

    @media (max-width: 760px) {
        h1,
        h4 {
            color: var(--mainWhite);
        }
    }
`;
