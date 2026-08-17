type PropertyMapProps = {
  title: string;
  location: string;
};

export default function PropertyMap({ title, location }: PropertyMapProps) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold text-[#0B1A33]">
        Property Location
      </h2>
      <div className="mt-4 overflow-hidden rounded-xl border border-slate-100">
        <iframe
          title={`${title} location`}
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            `${title} ${location}`,
          )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          className="h-[280px] w-full border-0 sm:h-[320px]"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}
