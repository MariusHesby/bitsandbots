function NavItem({ Icon, title }) {
  return (
    <div className="flex flex-col items-center cursor-pointer w-8 sm:w-20 group">
      <Icon className="h-6 mb-1 sm:group-hover:animate-bounce" />
      <p className="opacity-0 sm:group-hover:opacity-100 sm:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
}

export default NavItem;
