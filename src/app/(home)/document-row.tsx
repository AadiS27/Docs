import { TableCell, TableRow } from "@/components/ui/table";
import { Doc } from "../../../convex/_generated/dataModel";
import {SiGoogledocs} from 'react-icons/si';
import { Building2Icon, CircleUserIcon, MoreVertical } from "lucide-react";
import {format} from 'date-fns';
import { Button } from "@/components/ui/button";
import { DocumentMenu } from "./document-menu";
interface DocumentRowProps {
document:Doc<"documents">;
}

export const DocumentRow=({document}:DocumentRowProps)=>{
   const onNewTabClick=(id:string)=>{
    window.open(`/documents/${id}`,'_blank');
}
   
    return(
        <TableRow
        className="cursor-pointer">
            <TableCell className="w-[50px]">
                <SiGoogledocs className="size-6 fill-blue-500"/>
            </TableCell>
            <TableCell className="font-medium md:w-[45%]">
                {document.title}
            </TableCell>
            <TableCell className="text-muted-foreground hidden md:flex items-center gap-2">
                {document.organizationId?<Building2Icon className="size-4"/>:<CircleUserIcon className="size-4 "/>}
                {document.organizationId?"Shared":"Private"}

            </TableCell>
            <TableCell className="text-muted-foreground hidden md:table-cell">
            {format(new Date(document._creationTime),"MMM dd, yyyy")}
            </TableCell>
            <TableCell className="flex  justify-end">
                <DocumentMenu
                documentId={document._id}
                title={document.title}
                onNewTab={onNewTabClick}/>
            </TableCell>
        </TableRow>
    )
}