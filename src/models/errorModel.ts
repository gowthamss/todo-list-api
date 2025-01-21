export type hashObject = {
    [key: string]: any;
};

export type Error = {
    id: string;
    title: string;
    code: string;
    source?: hashObject;
}

export type Errors = {
    errors: Error[];
    statusCode: number | undefined;
}