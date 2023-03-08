import Link from "next/link";
import React from "react";
import Image from "next/image";

export default function Home() {
  const prds = [{name: 'computer'}, {name:'tablet'}, {name:'phone'}];
  const prds2 = [{name: '/'}, {name:'list'}, {name:'write'}];
  return (
      <div>
        <ul>
          <li><Link href="/zipcode">Zipcode</Link></li>
          <li><Link href="/zipcode">
              <Image src="/img/smile.png"
                   alt="Smile"
                   width={500}
                   height={500}
             /></Link></li>





            <li><Link href={
              {pathname: '/board/list',
                query: { write: '금'}, }
          }>게시판 글보기</Link></li>

            { prds2.map((p) => {
                return(
                <li><Link href={`/board/${p.name}`}>
                    {p.name}</Link></li>
                );
            })}
        </ul>

      </div>

  );
}