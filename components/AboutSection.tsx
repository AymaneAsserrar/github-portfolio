export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-secondary/10 scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto space-y-8 text-lg text-muted-foreground">
          <p>
            I am a passionate developer with a strong foundation in both front-end
            and back-end technologies. Currently pursuing my engineering degree at
            <span className="font-semibold text-foreground"> Télécom Saint-Étienne</span>, 
            I am eager to apply my skills in a challenging environment.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Soft Skills</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Rigor</li>
                <li>Curiosity</li>
                <li>Team Spirit</li>
                <li>Adaptability</li>
              </ul>
            </div>
            
            <div className="bg-background p-6 rounded-lg shadow-sm border">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Education</h3>
              <ul className="space-y-4">
                <li>
                  <div className="font-medium text-foreground">Télécom Saint-Étienne</div>
                  <div className="text-sm">Engineering Degree</div>
                </li>
                <li>
                  <div className="font-medium text-foreground">ENSA Tanger</div>
                  <div className="text-sm">Double Degree Program</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
