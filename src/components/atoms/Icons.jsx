export const Search = () => {
    return (
        <div>
            <svg className = {`float-right mr-2 mt-2 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.3125 11.4375C7.3125 8.05476 10.0548 5.3125 13.4375 5.3125C16.8202 5.3125 19.5625 8.05476 19.5625 11.4375C19.5625 14.8202 16.8202 17.5625 13.4375 17.5625C10.0548 17.5625 7.3125 14.8202 7.3125 11.4375ZM13.4375 3.3125C8.95019 3.3125 5.3125 6.95019 5.3125 11.4375C5.3125 15.9248 8.95019 19.5625 13.4375 19.5625C15.3208 19.5625 17.0544 18.9218 18.4322 17.8464L20.8724 20.2866C21.263 20.6772 21.8961 20.6772 22.2866 20.2866C22.6772 19.8961 22.6772 19.263 22.2866 18.8724L19.8464 16.4322C20.9218 15.0544 21.5625 13.3208 21.5625 11.4375C21.5625 6.95019 17.9248 3.3125 13.4375 3.3125Z" fill="#1E1E1E"/>
            </svg>
        </div>
    )
}

export const Wish = (props) => {
    return (
        <div>
            <svg className = {`${props.icon} float-right mr-2 mt-2 cursor-pointer`} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M20.3042 5.20872C19.8461 4.74626 19.3021 4.37941 18.7034 4.12912C18.1047 3.87883 17.463 3.75 16.8149 3.75C16.1668 3.75 15.5251 3.87883 14.9264 4.12912C14.3277 4.37941 13.7837 4.74626 13.3256 5.20872V5.20872C12.8018 5.73715 11.9477 5.73715 11.4239 5.20872V5.20872C10.4985 4.27503 9.24338 3.75048 7.93463 3.75048C6.62589 3.75048 5.37074 4.27503 4.44532 5.20872C3.5199 6.14241 3 7.40877 3 8.72921C3 10.0497 3.5199 11.316 4.44532 12.2497L5.39614 13.209L10.9543 18.8168C11.7367 19.6063 13.0128 19.6063 13.7953 18.8168L19.3534 13.209L20.3042 12.2497C20.7626 11.7875 21.1262 11.2386 21.3742 10.6346C21.6223 10.0305 21.75 9.38307 21.75 8.72921C21.75 8.07535 21.6223 7.4279 21.3742 6.82384C21.1262 6.21978 20.7626 5.67096 20.3042 5.20872Z" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </div>
    )
}
