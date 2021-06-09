export const ChildArea = ({ open }) => {
  return (
    <>
      {open ? (
        <div>
          <p>child</p>
        </div>
      ) : null}
    </>
  );
};
