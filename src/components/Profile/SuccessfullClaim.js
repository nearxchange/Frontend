import React from 'react'

const SuccessfullClaim = (props) => {
	return (
		<div class="ml-32 p-4 max-w-md w-2/3 bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
			<div class="flex justify-between items-center mb-4">
				<h5 class="text-xl font-bold leading-none text-gray-900 dark:text-white">Successfull Claim</h5>
				<a href="#" class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
					View all
				</a>
			</div>
			<div class="flow-root">
				<ul role="list" class="divide-y divide-gray-200 dark:divide-gray-700">
					<li class="py-3 sm:py-4">
						<div class="flex items-center space-x-4">
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
									wallet1.testnet
								</p>
								<p class="text-sm text-gray-500 truncate dark:text-gray-400">
									seller_wallet.testnet
								</p>
							</div>
							<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								320
							</div>
						</div>
					</li>
					<li class="py-3 sm:py-4">
						<div class="flex items-center space-x-4">
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
									wallet2.testnet
								</p>
								<p class="text-sm text-gray-500 truncate dark:text-gray-400">
									seller_wallet.testnet
								</p>
							</div>
							<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								3467
							</div>
						</div>
					</li>
					<li class="py-3 sm:py-4">
						<div class="flex items-center space-x-4">
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
									wallet3.testnet
								</p>
								<p class="text-sm text-gray-500 truncate dark:text-gray-400">
									seller_wallet.testnet
								</p>
							</div>
							<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								67
							</div>
						</div>
					</li>
					<li class="py-3 sm:py-4">
						<div class="flex items-center space-x-4">
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
									wallet4.testnet
								</p>
								<p class="text-sm text-gray-500 truncate dark:text-gray-400">
									seller_wallet.testnet
								</p>
							</div>
							<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								367
							</div>
						</div>
					</li>
					<li class="pt-3 pb-0 sm:pt-4">
						<div class="flex items-center space-x-4">
							<div class="flex-1 min-w-0">
								<p class="text-sm font-medium text-gray-900 truncate dark:text-white">
									wallet5.testnet
								</p>
								<p class="text-sm text-gray-500 truncate dark:text-gray-400">
									seller_wallet.testnet
								</p>
							</div>
							<div class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
								2367
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SuccessfullClaim;