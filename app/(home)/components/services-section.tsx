import { Card, CardContent, CardDecorator, CardHeader, CardTitle } from "@/components/ui/card";
import { SERVICES } from "@/utils/consts";

function ServicesSection() {
    return (
        <section id="services" className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">מה אנחנו עושים</h2>
                    <p className="mt-4 font-rubik lg:text-lg">
                        אנחנו עוזרים לעצמאים ובעלי עסקים להפוך את העסק שלהם ליעיל, רגוע ומסודר – בעזרת אוטומציות חכמות
                        וכלי AI פשוטים לשימוש. אין לנו “חבילות קבועות” – כל פתרון מותאם אישית לצרכים שלך ולדרך שבה אתה
                        עובד.
                    </p>
                </div>
                <div className="max-w-full grid lg:grid-cols-3 mx-auto *:text-center">
                    {SERVICES.slice(0, 3).map((service) => (
                        <Card key={service.title} className="group border-0 shadow-none bg-transparent">
                            <CardHeader>
                                <CardDecorator>
                                    <service.icon className="size-6" />
                                </CardDecorator>
                                <CardTitle className="whitespace-nowrap">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="font-rubik text-muted-foreground max-w-lg mx-auto">
                                {service.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="max-w-full flex flex-col lg:flex-row mx-auto *:text-center">
                    {SERVICES.slice(3).map((service) => (
                        <Card key={service.title} className="group border-0 shadow-none bg-transparent">
                            <CardHeader>
                                <CardDecorator>
                                    <service.icon className="size-6" />
                                </CardDecorator>
                                <CardTitle className="whitespace-nowrap">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="font-rubik text-muted-foreground">
                                {service.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="flex flex-col items-center justify-center my-16 max-w-lg mx-auto">
                    <h3 className="font-semibold text-lg whitespace-nowrap">🎯 המטרה שלנו</h3>
                    <p className="font-rubik mt-px text-center">
                        לקדם את העסקים בארץ בתחום האוטומציות והבינה המלאכותית עם מערכות שמותאמות לשוק הישראלי.
                    </p>
                </div>
            </div>
        </section>
    );
}

export { ServicesSection };
