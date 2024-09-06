import {
	type Member,
	coreMemberInfos,
	memberInfos,
} from "@/lib/data/staffMember";
import Link from "next/link";
import type { PropsWithChildren } from "react";

const LinkOrBox = (props: PropsWithChildren<{ href: Member["href"] }>) => {
	return props.href === "" ? (
		<div>{props.children}</div>
	) : (
		<Link href={props.href} rel="noopener noreferrer" target="_blank">
			{props.children}
		</Link>
	);
};

const StaffCard = (props: Member) => {
	const { name, image, href } = props;

	return (
		<div className="mx-auto w-32 pb-8">
			<LinkOrBox href={href}>
				<div className="flex-col">
					<div className="avatar">
						<div className="rounded-full">
							<img src={`/staffMemebers/${image}`} alt={name} />
						</div>
					</div>
					<p className="text-center">{name}</p>
				</div>
			</LinkOrBox>
		</div>
	);
};

export const StaffMemberSection = () => {
	return (
		<div className="pb-20 md:pb-40">
			<div className="mx-auto max-w-4xl">
				<h2 className="mb-20 scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl">
					コアスタッフ
				</h2>
			</div>
			<div className="mx-auto w-5/6 px-2 pb-20 md:w-4/6 md:px-20">
				<div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
					{coreMemberInfos.map((coreMemberInfo) => (
						<StaffCard key={coreMemberInfo.name} {...coreMemberInfo} />
					))}
				</div>
			</div>
			<div className="mx-auto max-w-4xl">
				<h2 className="mb-20 scroll-mt-20 text-center text-2xl font-bold text-accent lg:text-3xl">
					スタッフ一覧
				</h2>
			</div>
			<div className="mx-auto w-5/6 px-2 md:px-20">
				<div className="mx-auto grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
					{memberInfos.map((memberInfo) => (
						<StaffCard key={memberInfo.name} {...memberInfo} />
					))}
				</div>
			</div>
		</div>
	);
};
