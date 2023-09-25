const Wish = ({
  width = 24,
  height = 24,
  classnames = "",
  viewBox = "0 0 24 24",
  stroke = "#1E1E1E",
}) => {
  return (
    <div>
      <svg
        className={classnames}
        xmlns="http://www.w3.org/2000/svg"
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
      >
        <path
          d="M20.3042 5.20872C19.8461 4.74626 19.3021 4.37941 18.7034 4.12912C18.1047 3.87883 17.463 3.75 16.8149 3.75C16.1668 3.75 15.5251 3.87883 14.9264 4.12912C14.3277 4.37941 13.7837 4.74626 13.3256 5.20872V5.20872C12.8018 5.73715 11.9477 5.73715 11.4239 5.20872V5.20872C10.4985 4.27503 9.24338 3.75048 7.93463 3.75048C6.62589 3.75048 5.37074 4.27503 4.44532 5.20872C3.5199 6.14241 3 7.40877 3 8.72921C3 10.0497 3.5199 11.316 4.44532 12.2497L5.39614 13.209L10.9543 18.8168C11.7367 19.6063 13.0128 19.6063 13.7953 18.8168L19.3534 13.209L20.3042 12.2497C20.7626 11.7875 21.1262 11.2386 21.3742 10.6346C21.6223 10.0305 21.75 9.38307 21.75 8.72921C21.75 8.07535 21.6223 7.4279 21.3742 6.82384C21.1262 6.21978 20.7626 5.67096 20.3042 5.20872Z"
          stroke={stroke}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
export default Wish;
