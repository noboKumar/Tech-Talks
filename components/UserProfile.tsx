import { getUserSession } from "@/lib/userSession";

const UserProfile = async () => {
  const user = await getUserSession();
  return (
    <div>
      {/* user info */}
      <div>
        <h2>{user?.name}</h2>
        <p>Web Developer</p>
        <p>
          I would love to change the world, but they wont give me the source
          code.
        </p>
      </div>
      {/* follower stats */}
      <div>
        <div>
          <span>20</span>
          <span>Posts</span>
        </div>
        <div>
          <span>100</span>
          <span>Followers</span>
        </div>
        <div>
          <span>50</span>
          <span>Following</span>
        </div>
      </div>
      <hr />
      {/* route */}
      <div>
        <ul>
          <li>Feed</li>
          <li>Notification</li>
          <li>Connections</li>
          <li>Events</li>
          <li>Profile</li>
          <li>Settings</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;
