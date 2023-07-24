import "./styles/UserCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
  const handleDelete = () => {
    deleteUserById("/users", user.id);
  };
  const handleUpdate = () => {
    setUpdateInfo(user);
    handleOpenForm(true);
  };
  return (
    <article className="userCard">
      <h2 className="userCard__name">{`${user.first_name} ${user.last_name}`}</h2>
      <hr className="usercard__hr" />
      <ul className="userCard__list">
        <li className="userCard__item">
          <span className="userCard__label">EMAIL: </span>
          <span className="userCard__item-value">{user.email}</span>
        </li>
        <li className="userCard__item">
          <span className="userCard__label">BIRTHDAY: </span>
          
          <i classname='bx bx-gift'></i>
          <span className="userCard__item-value">{user.birthday}</span>
        </li>
      </ul>
      <hr />
      <footer className="userCard__footer">
        <button
          className="userCard__button button__trash"
          onClick={handleDelete}
        >
          <i className="bx bx-trash"></i>
        </button>
        <button
          className="userCard__button button__pencil"
          onClick={handleUpdate}
        >
          <i className="bx bx-pencil"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
