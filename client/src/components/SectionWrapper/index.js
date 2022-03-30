

const SectionWrapper = ({listings}) => (
<div>{listings &&
        listings.map((listing) => (
          <h2>{listing.make}</h2>
        ))}
        </div>
);

export default SectionWrapper;