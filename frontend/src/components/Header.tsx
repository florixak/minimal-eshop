import { Link } from "@tanstack/react-router";
import { Heart, Menu, ShoppingCart, User, X } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { useCartStore } from "@/stores/useCartStore";
import { useUserStore } from "@/stores/useUserStore";
import NotVerifiedModal from "./auth/NotVerifiedModal";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "react-i18next";

const navLinks = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "shop",
    href: "/shop",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "contact",
    href: "/contact",
  },
];

const Header = () => {
  const { t } = useTranslation();
  const { isAuthenticated, isAdmin, user } = useUserStore();
  const { getTotalItems } = useCartStore();

  return (
    <header
      key={isAuthenticated ? user?.id ?? "auth" : "guest"}
      className="fixed flex flex-row items-center justify-between px-6 md:px-16 lg:px-36 py-4 bg-white shadow-sm font-playfair w-full z-50"
    >
      <Link
        to="/"
        search={{ category: "all", sortBy: "no-filter", view: "grid" }}
      >
        <h1 className="text-2xl font-bold text-primary">{t("header.brand")}</h1>
      </Link>
      <nav className="hidden lg:flex flex-row gap-10 items-center">
        {navLinks.map((link) => (
          <Link
            key={link.key}
            to={link.href}
            activeProps={{ className: "font-bold text-primary cursor-default" }}
            inactiveProps={{
              className: "text-primary hover:text-secondary-200",
            }}
          >
            {t(`header.${link.key}`)}
          </Link>
        ))}
        {isAuthenticated && isAdmin() && (
          <Link
            to="/admin"
            className="text-primary hover:text-secondary-200"
            activeProps={{ className: "font-bold text-primary cursor-default" }}
            inactiveProps={{
              className: "text-primary hover:text-secondary-200",
            }}
          >
            {t("header.admin")}
          </Link>
        )}
      </nav>
      <div className="flex flex-row gap-2 md:gap-6 items-center">
        <LanguageToggle />
        {user && !user.verified && <NotVerifiedModal />}
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:text-secondary-200"
          asChild
        >
          <Link to="/account" search={{ section: "profile" }}>
            <User className="size-5" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:text-secondary-200"
          asChild
        >
          <Link to="/account" search={{ section: "wishlist" }}>
            <Heart className="size-5" />
          </Link>
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-primary hover:text-secondary-200"
          asChild
        >
          <Link to="/cart" className="relative">
            <ShoppingCart className="size-5" />
            {getTotalItems() > 0 && (
              <Badge className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center font-inter">
                {getTotalItems()}
              </Badge>
            )}
          </Link>
        </Button>

        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="block lg:hidden text-primary"
            >
              <Menu className="size-6 ml-2" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-80 bg-white">
            <SheetHeader className="text-left pb-4">
              <div className="flex items-center justify-between">
                <SheetTitle className="text-2xl font-bold text-primary font-playfair">
                  {t("header.brand")}
                </SheetTitle>
                <SheetClose>
                  <Button variant="ghost" size="icon" className="text-primary">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
            </SheetHeader>
            <nav className="flex flex-col gap-6 pl-5">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.key}>
                  <Link
                    to={link.href}
                    className="text-lg text-primary hover:text-secondary-200"
                    activeProps={{
                      className: "font-bold text-primary cursor-default",
                    }}
                    inactiveProps={{
                      className: "text-primary hover:text-secondary-200",
                    }}
                  >
                    {t(`header.${link.key}`)}
                  </Link>
                </SheetClose>
              ))}
              {isAuthenticated && isAdmin() && (
                <SheetClose asChild>
                  <Link
                    to="/admin"
                    className="text-lg text-primary hover:text-secondary-200"
                    activeProps={{
                      className: "font-bold text-primary cursor-default",
                    }}
                    inactiveProps={{
                      className: "text-primary hover:text-secondary-200",
                    }}
                  >
                    {t("header.admin")}
                  </Link>
                </SheetClose>
              )}
            </nav>
            <SheetFooter>
              <p className="text-center text-sm text-secondary-200">
                © {new Date().getFullYear()} {t("header.brand")}. {t("footer.copyright")}
              </p>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
