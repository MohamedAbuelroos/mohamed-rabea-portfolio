import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { heroData } from "@/data/hero";

export default function HeroActions() {
  return (
    <div className="mt-10 flex flex-wrap gap-4">
      <Button asChild size="lg" className="rounded-sm p-6">
        <Link href={heroData.primaryButton.href}>
          {heroData.primaryButton.text}

          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>

      <Button
        asChild
        variant="outline"
        size="lg"
        className="rounded-sm p-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:brightness-110"
      >
        <Link href={heroData.secondaryButton.href}>
          {heroData.secondaryButton.text}
        </Link>
      </Button>
    </div>
  );
}
