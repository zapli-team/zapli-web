import {
    Card,
    CardContent,
    CardDecorator,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { SERVICES } from "@/utils/consts";

function ServicesSection() {
    return (
        <section
            id="services"
            aria-label="שירותי אוטומציה ובינה מלאכותית"
            className="py-16 md:py-32"
        >
            <div className="@container mx-auto max-w-5xl px-6">
                <div className="text-center">
                    <h2 className="text-4xl font-semibold text-balance lg:text-5xl">
                        מה אנחנו עושים
                    </h2>
                    <p className="font-rubik mt-4 lg:text-lg">
                        אנחנו עוזרים לעצמאים ובעלי עסקים להפוך את העסק שלהם
                        ליעיל, רגוע ומסודר – בעזרת אוטומציות חכמות וכלי AI
                        פשוטים לשימוש. אין לנו “חבילות קבועות” – כל פתרון מותאם
                        אישית לצרכים שלך ולדרך שבה אתה עובד.
                    </p>
                </div>
                <div className="mx-auto grid max-w-full *:text-center lg:grid-cols-3">
                    {SERVICES.slice(0, 3).map((service) => (
                        <Card
                            key={service.title}
                            className="group border-0 bg-transparent shadow-none"
                        >
                            <CardHeader>
                                <CardDecorator>
                                    <service.icon className="size-6" />
                                </CardDecorator>
                                <CardTitle className="whitespace-nowrap">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="font-rubik text-muted-foreground mx-auto max-w-lg">
                                {service.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mx-auto flex max-w-full flex-col *:text-center lg:flex-row">
                    {SERVICES.slice(3).map((service) => (
                        <Card
                            key={service.title}
                            className="group border-0 bg-transparent shadow-none"
                        >
                            <CardHeader>
                                <CardDecorator>
                                    <service.icon className="size-6" />
                                </CardDecorator>
                                <CardTitle className="whitespace-nowrap">
                                    {service.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="font-rubik text-muted-foreground">
                                {service.description}
                            </CardContent>
                        </Card>
                    ))}
                </div>
                <div className="mx-auto my-16 flex max-w-lg flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold whitespace-nowrap">
                        🎯 המטרה שלנו
                    </h3>
                    <p className="font-rubik mt-px text-center">
                        לקדם את העסקים בארץ בתחום האוטומציות והבינה המלאכותית עם
                        מערכות שמותאמות לשוק הישראלי.
                    </p>
                </div>
            </div>
        </section>
    );
}

export { ServicesSection };
