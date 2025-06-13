import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import localFont from "next/font/local";

const kanopiBrazil = localFont({
  src: "../public/fonts/KanopiBrazil-Regular.otf",
  display: "swap",
});

export default function WorkSmartSection() {
  return (
    <div className="bg-[#ffffff] mt-30">
      <div className=" mx-auto px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <h1
                className={`${kanopiBrazil.className} text-[#222222] text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-8`}
              >
                WORK SMART
                <br />
                WORK EVERYWHERE
              </h1>

              <div className="space-y-6 text-[#666666] text-base leading-relaxed">
                <p>
                  We realize completely remote production with the
                  multi-structure applications we use. Experts from different
                  working principles take part in a common working culture,
                  creating a timeless and independent culture.
                </p>

                <p>
                  We care not only about our customers but also about our team.
                  One of the biggest reasons for this is that we experience that
                  original and creative production is always created in a safe
                  zone.
                </p>

                <p>We focus on time and people.</p>
              </div>
            </div>

            <Button
              variant="outline"
              className="bg-[#f5f5f5] border-[#e0e0e0] text-[#222222] hover:bg-[#eeeeee] px-8 py-3 rounded-full font-medium"
            >
              Our Team
            </Button>
          </div>

          {/* Right Column - Testimonials */}
          <div className="space-y-6 h-full flex flex-col justify-between">
            {/* First Testimonial */}
            <Card className="bg-[#f8f8f8] border-0 rounded-2xl relative overflow-hidden">
              <CardContent className="p-8 pr-20">
                <p className="text-[#666666] text-base leading-relaxed mb-6">
                  We make more creative productions in the freedom of
                  spacelessness.
                </p>
                <div className="text-[#222222]">
                  <span className="font-semibold">Ahmet Eren</span>
                  <span className="text-[#888888]">
                    {" "}
                    | Co-Founder of Plan B
                  </span>
                </div>
              </CardContent>
              <div className="absolute top-8 right-8 w-12 h-12 bg-[#ff314a] rounded-full"></div>
            </Card>

            {/* Second Testimonial */}
            <Card className="bg-[#f8f8f8] border-0 rounded-2xl relative overflow-hidden">
              <CardContent className="p-8 pr-20">
                <p className="text-[#666666] text-base leading-relaxed mb-6">
                  We provide a faster and more secure working environment by
                  working entirely on the cloud.
                </p>
                <div className="text-[#222222]">
                  <span className="font-semibold">Yusuf</span>
                  <span className="text-[#888888]"> | CTO of Plan B</span>
                </div>
              </CardContent>
              <div className="absolute top-8 right-8 w-12 h-12 bg-[#ff314a] rounded-full"></div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
