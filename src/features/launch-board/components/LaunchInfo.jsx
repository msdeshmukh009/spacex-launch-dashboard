const LaunchInfo = ({ launch, setShowModal }) => {
  const {
    mission_name,
    flight_number,
    rocket,
    launch_date_local,
    launch_success,
    upcoming,
    links,
    details,
  } = launch;

  return (
    <div className="bg-zinc-900 p-2 min-w-[500px] max-w-[750px] flex flex-col gap-8 overflow-y-scroll max-h-[500px] rounded-md">
      <div className="flex justify-end">
        <button
          title="Close"
          className="flex justify-center items-center shadow-md bg-[#c7c2c24a] bg-zinc-900 p-1 w-8 h-8 rounded-[50%]"
          onClick={e => {
            e.stopPropagation();
            setShowModal(false);
          }}
        >
          x
        </button>
      </div>

      <div className="flex m-auto justify-center items-center w-full gap-4">
        {links.mission_patch_small ? (
          <div className="basis-7">
            <img className="w-full" src={links.mission_patch_small} alt="mission patch" />
          </div>
        ) : null}
        <h1 className="text-3xl text-center">{mission_name}</h1>
      </div>

      <div className="flex gap-4">
        {links.youtube_id ? (
          <iframe
            className="w-full"
            width="250"
            height="200"
            src={`https://www.youtube.com/embed/${links.youtube_id}`}
            title={mission_name}
            frameBorder="0"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : null}
        <table className="w-full">
          <tbody>
            <tr>
              <th className="border-2 p-2 w-1/2">Flight Name</th>
              <td className="border-2 p-2  w-1/2">{flight_number}</td>
            </tr>
            <tr>
              <th className="border-2 p-2">Rocket Name</th>
              <td className="border-2 p-2">{rocket.rocket_name}</td>
            </tr>
            <tr>
              <th className="border-2 p-2">Launch Date</th>
              <td className="border-2 p-2">{new Date(launch_date_local).toLocaleDateString()}</td>
            </tr>
            <tr>
              <th className="border-2 p-2">Launch Status</th>
              <td className="border-2 p-2">
                {launch_success ? "Success" : upcoming ? "Upcoming" : "Failed"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>{details}</p>

      {links.flickr_images.length ? (
        <div>
          <h2 className="text-xl my-2 text-left">Images</h2>
          <div className="flex flex-wrap items-center justify-between gap-2">
            {links.flickr_images.map(imageUrl => (
              <a
                key={imageUrl}
                className="basis-40 inline-block"
                href={imageUrl}
                target="_blank"
                rel="noreferrer"
              >
                <img width={100} className="w-full" src={imageUrl} alt={rocket.rocket_name} />
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div>
        <h2 className="text-xl my-2 text-left">More Info</h2>
        <div className="flex gap-2 justify-center">
          {links.wikipedia ? (
            <a className="underline" href={links.wikipedia} target="_blank" rel="noreferrer">
              Wikipedia
            </a>
          ) : null}

          {links.presskit ? (
            <a className="underline" href={links.presskit} target="_blank" rel="noreferrer">
              Presskit
            </a>
          ) : null}

          {links.article_link ? (
            <a className="underline" href={links.article_link} target="_blank" rel="noreferrer">
              Article
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export { LaunchInfo };
