import { BasicInfo } from "@/types/my-types";

export default function BasicInfoSemantic({ data }: { data: BasicInfo }) {
    return (
        <article>
            <h2>{data.name}</h2>
            <h6>{data.label}</h6>
            <p>{data.summary}</p>
            <article>
                <p>{data.location_address}</p>
                <p className="break-all">{data.email}</p>
                <p>{data.phone} / {data.phone2}</p>
            </article>
        </article>
    )
}