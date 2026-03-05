export type Payload = {
    messaging_product: "whatsapp";
    to: string;
    type: "template";
    template: {
        name: string;
        language: { code: string };
        components?: Array<{
            type: "body" | "header" | "button";
            sub_type?: "url" | "quick_reply";
            index?: string;
            parameters: Array<
                | { type: "text"; parameter_name?: string; text: string }
                | {
                      type: "currency";
                      currency: {
                          fallback_value: string;
                          code: string;
                          amount_1000: number;
                      };
                  }
                | { type: "date_time"; date_time: { fallback_value: string } }
                | { type: "image"; image: { link: string } }
                | {
                      type: "document";
                      document: { link: string; filename?: string };
                  }
                | { type: "video"; video: { link: string } }
            >;
        }>;
    };
};
