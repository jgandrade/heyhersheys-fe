import { createClient, ClientConfig, SanityClient } from "@sanity/client";

const config: ClientConfig = {
    projectId: "kows5um3",
    dataset: "production",
};

export const client: SanityClient = createClient(config);
