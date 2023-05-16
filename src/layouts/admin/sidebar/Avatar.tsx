interface types {
  name: string;
  path: string;
}

const Avatar = ({ name, path }: types) => {
  return (
    <div className="pt-1 pb-2 d-flex flex-column avatar_li position-relative sideItem">
      <span className="avatar_box">
        <img className="w-100 rounded-circle" src={path} />
      </span>
      <div className="sidebar_avatar_name text-center hiddenable">{name}</div>
    </div>
  );
};
export default Avatar;
