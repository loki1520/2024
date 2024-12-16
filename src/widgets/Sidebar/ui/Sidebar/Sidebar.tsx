import { classNames } from "@/shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher/ui/ThemeSwitcher";
import { LangSwitcher } from "@/widgets/LangSwitcher/ui/LangSwitcher";

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false); // по умолчанию развернут;

  const onToggle = () => {
    setCollapsed((el) => !el);
  };

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
      <button onClick={onToggle}>toggle</button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>
    </div>
  );
};

// {[cls.collapsed]: collapsed} - если collapsed = true, то добавляем класс cls.collapsed
