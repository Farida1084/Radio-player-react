export default function Radio(props) {
  const { channel } = props;

  return (
    <div
      className="flex p-4 mb-4 rounded-2xl "
      style={{ backgroundColor: `#${channel.color} ` }}
    >
      <img className=" mb-4 w-40  " src={channel.image} alt="" />
      <div>
        <audio
          className="w-80 mt-20"
          controls
          src={channel.liveaudio.url}
          type="audio/mpeg"
        />
      </div>
    </div>
  );
}
