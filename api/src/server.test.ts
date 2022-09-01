import buildServer from "./server";

describe("Endpoint integration tests", () => {
    const server = buildServer();

    it("GET / should respond with status 200", async () => {
        const response = await server.inject({ 
            method: "GET", 
            url: "/ping" 
        });
        
        expect(response.body).toEqual("pong\n");
    })
});