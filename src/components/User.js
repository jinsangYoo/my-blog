import React from "react";
import PropTypes from "prop-types";

export default class User extends React.Component {
  componentWillUnmount() {
    this.props.onMount(this.props.user);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      this.props.onUpdate(nextProps.user);
    }
  }

  render() {
    const { category, repos, error } = this.props;
    return (
      <div>
        <h2>{typeof category !== "undefined" ? `${category.name}의 리포지토리` : ""}</h2>
        {(() => {
          if (error) {
            return <p>오류가 발생했습니다. 새로고침 해주세요.</p>;
          } else if (typeof repos === "undefined") {
            return <p>데이터를 읽어 들이는 중...</p>;
          } else if (repos.length === 0) {
            return <p>데이터가 없습니다.</p>;
          } else {
            return (
              <ol>
                {repos.map((item, index) => (
                  <li key={index}>
                    <h3>
                      <a href={item.url} target="_blank">
                        {item.name}
                      </a>
                    </h3>
                    <p>{item.description ? item.description : ""}</p>
                  </li>
                ))}
              </ol>
            );
          }
        })()}
      </div>
    );
  }
}
User.propTypes = {
  user: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,

  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string,
      url: PropTypes.string.isRequired,
    })
  ),
  error: PropTypes.bool.isRequired,
};
User.defaultProps = {
  user: "apple",
};
